const url = require('url');
const child_process = require('child_process');
const path = require('path')

const booksDatabase = require('../books/books2');
const bookList = booksDatabase.bookList;

function download_file_with_wget(file_url, DOWNLOAD_DIR,) {


    return new Promise((resolve, reject) => {

        DOWNLOAD_DIR = DOWNLOAD_DIR || '.';

        // extract the file name
        const file_name = url.parse(file_url).pathname.split('/').pop();

        // compose the wget command
        const wget = 'wget -P ' + DOWNLOAD_DIR + ' ' + file_url;

        // excute wget using child_process' exec function
        child_process.exec(wget, function (err, stdout, stderr) {
            return err ? reject(err) : resolve(file_name)
        });
    })

};



bookList.forEach(item => download_file_with_wget(item.src));
