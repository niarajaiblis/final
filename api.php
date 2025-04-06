<?php

// Ambil data dari request (POST atau GET)
$origin = isset($_POST['origin']) ? $_POST['origin'] : '';
$destination = isset($_POST['destination']) ? $_POST['destination'] : '';
$weight = isset($_POST['weight']) ? $_POST['weight'] : '';
$courier = isset($_POST['courier']) ? $_POST['courier'] : 'jne'; // Default courier

if (empty($origin) || empty($destination) || empty($weight)) {
    echo json_encode([
        "error" => true,
        "message" => "Origin, destination, and weight are required."
    ]);
    exit;
}

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://rajaongkir.komerce.id/api/v1/destination/domestic-destination?search=sinduharjo&limit=5&offset=0",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => http_build_query([
        'origin' => $origin,
        'destination' => $destination,
        'weight' => $weight,
        'courier' => $courier
    ]),
    CURLOPT_HTTPHEADER => array(
        "key: 8svUPMuC43ff733f0b65b76cSQ9m5KHJ",
        "content-type: application/x-www-form-urlencoded"
    ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo json_encode([
        "error" => true,
        "message" => "cURL Error #: " . $err
    ]);
} else {
    echo $response;
}