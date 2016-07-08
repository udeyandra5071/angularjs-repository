<?php
if(file_exists('test.xml')) {
    $xml = new DOMDocument();
    $xml->load('test.xml');
    foreach($xml->getElementsByTagName('t') as $child) {
        echo '|' . $child->nodeValue;
    }
    echo $xml->saveXML();
} else {
    exit('Failed to open file.xml.');
}
?>