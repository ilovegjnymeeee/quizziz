import fs from 'fs';
import path from 'path';

const storageDirectory = path.join(__dirname, '../../uploads');

const ensureStorageDirectoryExists = () => {
    if (!fs.existsSync(storageDirectory)) {
        fs.mkdirSync(storageDirectory, { recursive: true });
    }
};

const saveFile = (file: Express.Multer.File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const filePath = path.join(storageDirectory, file.originalname);
        fs.writeFile(filePath, file.buffer, (err) => {
            if (err) {
                return reject(err);
            }
            resolve(filePath);
        });
    });
};

const getAllFiles = (): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        fs.readdir(storageDirectory, (err, files) => {
            if (err) {
                return reject(err);
            }
            resolve(files);
        });
    });
};

export { ensureStorageDirectoryExists, saveFile, getAllFiles };