import * as multer from 'multer';
import { v4 as uuid } from 'uuid';
import * as path from 'path';

const storage = multer.diskStorage({
    destination:(req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});

export default multer({storage: storage});