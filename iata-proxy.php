<?php
if (isset($_GET['search'])) {
    $search = $_GET['search'];
    $apiKey = 'bc564ca5810aa823b844d5e7ac92ae76'; 
    $url = "http://api.aviationstack.com/v1/airports?access_key=$apiKey&search=" . urlencode($search);
    
    $response = file_get_contents($url);
    header('Content-Type: application/json');
    echo $response;
}
?>
