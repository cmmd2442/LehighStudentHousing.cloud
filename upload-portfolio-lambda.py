import boto3
from botocore.client import Config
import StringIO
import zipfile

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:462554666803:deployPortfolioTopic')

    location = {
        "bucketName": 'lehighbuild',
        "objectKey": 'portfoliobuild.zip'
    }

    try:


        job = event.get("CodePipline.job")

        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "MyAppBuild":
                    location = artifact["location"]["s3Location"]


        print "Building portfolio from " + str(location)

        s3 = boto3.resource('s3',config=Config(signature_version='s3v4'))

        portfolio_bucket = s3.Bucket('LehighStudentHousing.cloud')
        build_bucket = s3.Bucket(location["bucketName"])

        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj(location["objectKey"],portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj,nm)
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

            print "job done!"
            topic.publish(Subject = "Portfolio Deployed", Message = "Portfolio Deployed successfully!")
            if job:
                codepipline = boto3.client('codepipline')
                codepipline.put_job_success_result(jobId=job["i"])

            return 'Hello from Lambda'
    except:
        topic.publish(Subject="Portfolio Deploy Failed", Message = "The portfolio was not deployed successfully!")
        raise
