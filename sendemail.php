<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $origin = isset($_POST['origin']) ? $_POST['origin'] : '';
    $destination = isset($_POST['destination']) ? $_POST['destination'] : '';
    $departure = isset($_POST['departure']) ? $_POST['departure'] : '';
    $return = isset($_POST['return']) ? $_POST['return'] : '';
    $adults = isset($_POST['adults']) ? $_POST['adults'] : '';
    $children = isset($_POST['children']) ? $_POST['children'] : '';
    $infants = isset($_POST['infants']) ? $_POST['infants'] : '';
    $class = isset($_POST['class']) ? $_POST['class'] : '';
    $airlines = isset($_POST['airlines']) ? $_POST['airlines'] : '';

    if (!empty($origin) && !empty($destination) && !empty($departure) && !empty($return) && !empty($adults)) {

        $to = "alizanaseem24@gmail.com"; 
        $subject = "Flight Enquiry Form Submission";

        $body = "New Flight Enquiry:\n\n";
        $body .= "Origin: $origin\n";
        $body .= "Destination: $destination\n";
        $body .= "Departure Date: $departure\n";
        $body .= "Return Date: $return\n";
        $body .= "Adults: $adults\n";
        $body .= "Children: $children\n";
        $body .= "Infants: $infants\n";
        $body .= "Class: $class\n";
        $body .= "Preferred Airlines: $airlines\n";

        $headers = "From: noreply@yourdomain.com";

        if (mail($to, $subject, $body, $headers)) {
            echo "Thank you! Your enquiry has been submitted successfully.";
        } else {
            echo "Oops! Something went wrong. Please try again later.";
        }

    } else {
        echo "Please fill in all required fields.";
    }

} else {
    echo "Invalid request method.";
}
?>
