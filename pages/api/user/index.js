import {queryMethod} from "../../../modules/mysqlModule";

export default function handler(req, res) {
    if (req.method === 'POST') {
        queryMethod('INSERT INTO example (name) VALUES (?)', ['Examp']);
        res.status(200).json({message: 'Everything is ok.'});
    } else {
        res.status(200).json(['John', 'Martin', 'Phil', 'Cristian', 'Ruben']);
    }
}