import { s3 } from '../config/s3Config';

// Parametros necesarios para subir un archivo a S3
export const uploadFile = async (file: Buffer, fileName: string): Promise<string> => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME as string,
    Key: fileName,
    Body: file
  };

  const { Location } = await s3.upload(params).promise();
  return Location;
};