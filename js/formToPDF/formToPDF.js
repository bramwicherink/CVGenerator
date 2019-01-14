

$('#button').click(function() {

    let doc = new jsPDF();
    doc.addImage(imgData, 'JPEG',0,0,210,297);
    doc.setTextColor(255,255,255);


    let voornaam = $('#voornaam').val();
    let achternaam = $('#achternaam').val();
    let adresgegevens = $('#adresgegevens').val();
    let telefoon = $('#telefoon').val();
    let email = $('#email').val();
    let geboortedatum = $('#geboortedatum').val();
    let geboorteplaats = $('#geboorteplaats').val();
    let nationaliteit = $('#nationaliteit').val();

    doc.text(40, 27, voornaam);
    doc.setFontSize(10);


    doc.text(40, 32, achternaam);
    doc.text(40, 37, adresgegevens);
    doc.text(40, 42, telefoon);
    doc.text(40, 47, email);
    doc.text(40, 52, geboortedatum);
    doc.text(40, 57, geboorteplaats);
    doc.text(40, 67, nationaliteit);





    doc.save('test.pdf');





});


