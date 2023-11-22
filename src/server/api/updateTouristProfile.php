<?php
// ... (unchanged)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle the file upload
    $targetDir = "path/to/upload/directory/";
    $targetFile = $targetDir . basename($_FILES["image"]["name"]);

    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
        // Image uploaded successfully, now update the profile details
        $name = $_POST["name"];
        $contact = $_POST["contact"];
        $email = $_POST["email"];
        $country = $_POST["country"];
        $languages = $_POST["languages"];
        $tourist_id = $_SESSION['tourist_id']; 
        $gender = $_POST["gender"];

        $tourist = new Tourist();
        $tourist->updateDetails($name, $email, $contact, $gender, $country, $languages, $tourist_id);
        
        // Provide any additional response if needed
        echo "Profile updated successfully!";
    } else {
        echo "Error uploading image.";
    }
} else {
    echo "Invalid request method.";
}
?>
