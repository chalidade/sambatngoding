<?php
require '../vendor/autoload.php';
require './prettier.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$spreadsheet = new Spreadsheet();

$inputFileType = 'Xlsx';
$inputFileName = './assets/data_excel.xlsx';

/**  Create a new Reader of the type defined in $inputFileType  **/
$reader = \PhpOffice\PhpSpreadsheet\IOFactory::createReader($inputFileType);
/**  Advise the Reader that we only want to load cell data  **/
$reader->setReadDataOnly(true);

$worksheetData = $reader->listWorksheetInfo($inputFileName);
$new_data = [];

foreach ($worksheetData as $worksheet) {
    $sheetName = $worksheet['worksheetName'];

    echo "<h4>$sheetName</h4>";
    /**  Load $inputFileName to a Spreadsheet Object  **/
    $reader->setLoadSheetsOnly($sheetName);
    $spreadsheet = $reader->load($inputFileName);

    $worksheet = $spreadsheet->getActiveSheet();
    $data = $worksheet->toArray();
    $new_data = [];

    foreach ($data as $data) {
        $tmp_data = [];

        foreach ($data as $value) {
            if(!empty($value)) {
                array_push($tmp_data, $value);
            }
        }

        if(count($tmp_data) > 0) {
            array_push($new_data, $tmp_data);
        }
    }

    prettier($new_data);
}