<?php
header('Content-Type: application/json');

// API configuration
$api_key = '8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d';
$province_id = 36; // Default province ID (Banten)
$api_url = 'https://api.binderbyte.com/wilayah/kabupaten';

// Get province ID from request if provided
$requested_province = isset($_GET['id_provinsi']) ? (int)$_GET['id_provinsi'] : $province_id;

// Initialize cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $api_url . '?api_key=' . $api_key . '&id_provinsi=' . $requested_province);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

// Execute and get response
$response = curl_exec($ch);
curl_close($ch);

// Process response
if ($response === false) {
    echo json_encode(['error' => 'Failed to connect to API']);
    exit;
}

$data = json_decode($response, true);

// Format response for frontend
$formatted_data = [];
if (isset($data['value'])) {
    foreach ($data['value'] as $kabupaten) {
        $formatted_data[] = [
            'id' => $kabupaten['id'],
            'text' => $kabupaten['name']
        ];
    }
}

echo json_encode($formatted_data);
?>
