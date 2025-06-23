<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    if (!empty($name) && !empty($email) && !empty($message)) {
        $to = "alizanaseem24@gmail.com"; 
        $subject = "New Contact Form Submission";
        $body = "Name: $name\nEmail: $email\nMessage: $message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Thank you! Your message has been sent successfully. We'll get back to you soon.";
        } else {
            echo "Oops! Something went wrong. Please try again later or contact us directly at gulflightllc@gmail.com";
        }
    } else {
        echo "Please fill all fields.";
    }
} else {
    echo "Invalid request method.";
}
?>