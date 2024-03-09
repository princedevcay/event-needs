<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    try {
        // Retrieve the raw POST data
        $postdata = file_get_contents("php://input");

        // Attempt to decode the JSON data
        $data = json_decode($postdata, true);

        // Check if JSON decoding was successful
        if ($data === null) {
            throw new Exception("Error decoding JSON data");
        }

        // Extract form data
        $vendorName = $data["vendorName"];
        $contactPerson = $data["contactPerson"];
        $businessAddress = $data["businessAddress"];
        $phone = $data["phone"];
        $email = $data["email"];
        $website = $data["website"];
        $primaryService = $data["primaryService"];
        $secondaryService = $data["secondaryService"];
        $yearsInBusiness = $data["yearsInBusiness"];
        $references = $data["references"];
        $companySize = $data["companySize"];
        $availableYearRound = $data["availableYearRound"];
        $eventsHandled = $data["eventsHandled"];
        $feesBreakdown = $data["feesBreakdown"];
        $customizablePackages = $data["customizablePackages"];
        $formalAgreement = $data["formalAgreement"];
        $setupTearDown = $data["setupTearDown"];
        $spaceEquipmentRequirements = $data["spaceEquipmentRequirements"];
        $licensedInUK = $data["licensedInUK"];
        $liabilityInsurance = $data["liabilityInsurance"];
        $sampleMenus = $data["sampleMenus"];
        $dietaryRestrictions = $data["dietaryRestrictions"];
        $cancellationPolicy = $data["cancellationPolicy"];
        $offerRefunds = $data["offerRefunds"];
        $additionalServices = $data["additionalServices"];
        $sustainablePractices = $data["sustainablePractices"];
        $agreementToSignUp = $data["agreementToSignUp"];
        $yearlyFee = $data["yearlyFee"];
        // Add selected package to the extracted data
        $selectedPackage = $data["selectedPackage"];

        // Compose email subject and body
        $subject = "New Vendor Registration: $vendorName";
        $message = "Vendor Name: $vendorName\n"
            . "Contact Person: $contactPerson\n"
            . "Business Address: $businessAddress\n"
            . "Phone: $phone\n"
            . "Email: $email\n"
            . "Website: $website\n"
            . "Primary Service: $primaryService\n"
            . "Secondary Service: $secondaryService\n"
            . "Years in Business: $yearsInBusiness\n"
            . "References: $references\n"
            . "Company Size: $companySize\n"
            . "Available Year Round: $availableYearRound\n"
            . "Events Handled: $eventsHandled\n"
            . "Fees Breakdown: $feesBreakdown\n"
            . "Customizable Packages: $customizablePackages\n"
            . "Formal Agreement: $formalAgreement\n"
            . "Setup and Tear Down: $setupTearDown\n"
            . "Space and Equipment Requirements: $spaceEquipmentRequirements\n"
            . "Licensed in UK: $licensedInUK\n"
            . "Liability Insurance: $liabilityInsurance\n"
            . "Sample Menus: $sampleMenus\n"
            . "Dietary Restrictions: $dietaryRestrictions\n"
            . "Cancellation Policy: $cancellationPolicy\n"
            . "Offer Refunds: $offerRefunds\n"
            . "Additional Services: $additionalServices\n"
            . "Sustainable Practices: $sustainablePractices\n"
            . "Agreement to Sign Up: $agreementToSignUp\n"
            . "Yearly Fee: $yearlyFee\n"
             // Include the selected package in the email message
             . "Selected Package: $selectedPackage\n"
             . "Thank you for your registration.";

        // Send email to multiple recipients
        $recipientEmails = "prince.caleb.com,info@event-needs.com,akakpo.c.benjamin@gmail.com";
        $headers = "From: $email";

        if (mail($recipientEmails, $subject, $message, $headers)) {
            echo json_encode(["success" => true, "message" => "Form data sent successfully"]);
        } else {
            throw new Exception("Error sending email");
        }
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => $e->getMessage()]);
    }
} else {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid request"]);
}
?>
