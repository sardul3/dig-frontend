import { Injectable } from '@angular/core';

import S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  constructor() { }

  uploadFile(file) {
    const contentType = file.type;
    
    const bucket = new S3(
          {
              accessKeyId: 'AKIA33C6FGRPO6SDKQZE',
              secretAccessKey: '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',
              region: 'us-east-2'
          }
      );
      const params = {
          Bucket: 'dig-db-files',
          Key: file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };

      var upload = bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });

      //for upload progress   
      bucket.upload(params).on('httpUploadProgress', function (evt) {
          console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
      }).send(function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });
    return upload.promise();
  }
}

