$(document).ready(function () {
    let max_fields = 8; // Maximaal aantal toegestane velden
    let max_fields_ac = 6;
    let wrapper = $(".input_fields_wrap");
    let wrapper_ac = $(".input_fields_wrap_ac");
    let add_button = $(".add_field_button");
    let add_button_ac = $(".add_field_button_ac");

    let x = 1; //initial text box count
    let y = 1;
    let extra_id = 1;
    let extra_id_ac = 1;

    let opleidingen = [];
    let huidigeRij = 0;
    let maxRijen = 6;

    $(add_button_ac).click(function (e) {
        e.preventDefault();
        extra_id_ac++;

        if (y < max_fields_ac) {
            y++;
            $(wrapper_ac).append('<div class="extra-course"><br><br>' +
                '<div class="form-left">' +
                '<input class="input-field" name="mytext[]" type="text" id="naam_ac" value="" placeholder="Naam werkervaring of activiteit" maxlength="22"><br>\n' +
                '<input class="input-field" name="mytext[]" type="text" id="naam_instantie_ac" value="" placeholder="Naam werkgever of instantie" maxlength="25" /><br>\n' +
                '</div>' +
                '<div class="form-right">' +
                '                        <input class="input-field" name="mytext[]" type="text" id="startdatum_ac" value="" placeholder="Startdatum activiteit" /><br>\n' +
                '                        <input class="input-field" name="mytext[]" type="text" id="einddatum_ac" value="" placeholder="Einddatum activiteit"/><br>\n' +
                '                        <input class="input-field" name="mytext[]" type="text" id="overige_informatie_ac"  placeholder="Overige informatie" maxlength="30"/><br>\n' +
                '</div>' +
                '                        </select><a href="#" class="button remove_field_ac">Verwijder activiteit</a></div>'); // Laat de knop om te verwijderen zien


        }

        $(wrapper).on("click", ".remove_field_ac", function (e) { //user click on remove text
            e.preventDefault();
            $(this).parent('div').remove();
            y--;
            extra_id_ac--;

        });
    });

    $('.add_field_button').click(function () {

        if (huidigeRij < maxRijen) {
            let opleiding = {
                voornaam: $('#voornaam').val(),
                achternaam: $('#achternaam').val(),
                adresgegevens: $('#adres').val(),
                postcode: $('#postcode').val(),
                woonplaats: $('#woonplaats').val(),
                telefoon: $('#telefoon').val(),
                email: $('#email').val(),
                geboortedatum: $('#geboortedatum').val(),
                geboorteplaats: $('#geboorteplaats').val(),
                nationaliteit: $('#nationaliteit').val(),
                naamOpleiding: $('#naam_opleiding').val(),
                naamInstituut: $('#naam_instituut').val(),
                startdatum: $('#startdatum').val(),
                einddatum: $('#einddatum').val(),
                overigeInformatie: $('#overige_informatie').val()
            };

            // Voeg de opleiding toe
            opleidingen.push(opleiding);
            huidigeRij++;

            toonToegevoegdeOpleiding(opleiding);
            console.log(opleiding);

            // Maak opleidingen form leeg, voor de volgende opleiding die opgevoerd kan worden
            $("#naam_opleiding").val("");
            $("#naam_instituut").val("");
            $("#startdatum").val("");
            $("#einddatum").val("");
            $("#overige_informatie").val("");
        }
        else {
            alert("Maximum aantal opleidingen bereikt");
        }
    });


    /**
     * Toon de nieuwe toegevoegd opleiding
     * @param opleiding  de opleiding die toegevoegd is
     */
    function toonToegevoegdeOpleiding(opleiding) { //on add input button click
        x++; //text box increment
        extra_id++;

        $(wrapper).append('<div class="extra-course"><br><br>' +
            '<div class="form-left">' +
            ' <input class="input-field" name="mytext[]" type="text" value= "' + opleiding.naamOpleiding + '" placeholder="Naam opleiding" maxlength="15"><br>\n' +
            ' <input class="input-field" name="mytext[]" type="text" value= "' + opleiding.naamInstituut + '"  placeholder="Naam instituut" maxlength="25" /><br>\n' +
            '</div>' +
            '<div class="form-right">' +
            '  <input class="input-field" name="mytext[]" type="text" value= "' + opleiding.startdatum + '"  placeholder="Startdatum" /><br>\n' +
            '  <input class="input-field" name="mytext[]" type="text" value= "' + opleiding.einddatum + '"  placeholder="Einddatum"/><br>\n' +
            '  <input class="input-field" name="mytext[]" type="text" value= "' + opleiding.overigeInformatie + '"  placeholder="Overige informatie" maxlength="30"/><br>\n' +
            '</div>' +
            '</select><a href="#" class="button remove_field">Verwijder opleiding</a></div>'); // Laat de knop om te verwijderen zien


        $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
            e.preventDefault();
            $(this).parent('div').remove();
            x--;
            extra_id--;

            // Verwijder uit opleidingen  (werkt niet ???)
            opleidingen.splice(huidigeRij, 1);
        });

        $('.back').hide();
    };


    $('.button-cv-maken').click(function () {
        let doc = new jsPDF();
        doc.addImage(imgData, 'JPEG', 0, 0, 210, 297);
        doc.setTextColor(0.7544, 0.4035, 0.0000, 0.5529);
        /*
                let voornaam = $('#voornaam').val();
                let achternaam = $('#achternaam').val();
                let adresgegevens = $('#adres').val();
                let postcode = $('#postcode').val();
                let woonplaats = $('#woonplaats').val();
                let telefoon = $('#telefoon').val();
                let email = $('#email').val();
                let geboortedatum = $('#geboortedatum').val();
                let geboorteplaats = $('#geboorteplaats').val();
                let nationaliteit = $('#nationaliteit').val();
                let naamOpleiding = $('#naam_opleiding').val();
                let naamInstituut = $('#naam_instituut').val();
                let startdatum = $('#startdatum').val();
                let einddatum = $('#einddatum').val();
                let overigeInformatie = $('#overige_informatie').val();


                let naamOpleiding2 = $('#naam_opleiding2').val();
                let naamInstituut2 = $('#naam_instituut2').val();
                let startdatum2 = $('#startdatum2').val();
                let einddatum2 = $('#einddatum2').val();
                let overigeInformatie2 = $('#overige_informatie2').val();


                let naamOpleiding3 = $('#naam_opleiding3').val();
                let naamInstituut3 = $('#naam_instituut3').val();
                let startdatum3 = $('#startdatum3').val();
                let einddatum3 = $('#einddatum3').val();
                let overigeInformatie3 = $('#overige_informatie3').val();


                let naamOpleiding4 = $('#naam_opleiding4').val();
                let naamInstituut4 = $('#naam_instituut4').val();
                let startdatum4 = $('#startdatum4').val();
                let einddatum4 = $('#einddatum4').val();
                let overigeInformatie4 = $('#overige_informatie4').val();


                let naamOpleiding5 = $('#naam_opleiding5').val();
                let naamInstituut5 = $('#naam_instituut5').val();
                let startdatum5 = $('#startdatum5').val();
                let einddatum5 = $('#einddatum5').val();
                let overigeInformatie5 = $('#overige_informatie5').val();

                let naamOpleiding6 = $('#naam_opleiding6').val();
                let naamInstituut6 = $('#naam_instituut6').val();
                let startdatum6 = $('#startdatum6').val();
                let einddatum6 = $('#einddatum6').val();
                let overigeInformatie6 = $('#overige_informatie6').val();

                let naamOpleiding7 = $('#naam_opleiding7').val();
                let naamInstituut7 = $('#naam_instituut7').val();
                let startdatum7 = $('#startdatum7').val();
                let einddatum7 = $('#einddatum7').val();
                let overigeInformatie7 = $('#overige_informatie7').val();

                let naamOpleiding8 = $('#naam_opleiding8').val();
                let naamInstituut8 = $('#naam_instituut8').val();
                let startdatum8 = $('#startdatum8').val();
                let einddatum8 = $('#einddatum8').val();
                let overigeInformatie8 = $('#overige_informatie8').val();

                let naamActiviteit = $('#naam_ac').val();
                let naamInstantie = $('#naam_instantie_ac').val();
                let startdatumActiviteit = $('#startdatum_ac').val();
                let einddatumActiviteit = $('#einddatum_ac').val();
                let overigeInformatieActiviteit = $('#overige_informatie_ac').val();

                let naamActiviteit2 = $('#naam_ac2').val();
                let naamInstantie2 = $('#naam_instantie_ac2').val();
                let startdatumActiviteit2 = $('#startdatum_ac2').val();
                let einddatumActiviteit2 = $('#einddatum_ac2').val();
                let overigeInformatieActiviteit2 = $('#overige_informatie_ac2').val();

                let naamActiviteit3 = $('#naam_ac3').val();
                let naamInstantie3 = $('#naam_instantie_ac3').val();
                let startdatumActiviteit3 = $('#startdatum_ac3').val();
                let einddatumActiviteit3 = $('#einddatum_ac3').val();
                let overigeInformatieActiviteit3 = $('#overige_informatie_ac3').val();

                let naamActiviteit4 = $('#naam_ac4').val();
                let naamInstantie4 = $('#naam_instantie_ac4').val();
                let startdatumActiviteit4 = $('#startdatum_ac4').val();
                let einddatumActiviteit4 = $('#einddatum_ac4').val();
                let overigeInformatieActiviteit4 = $('#overige_informatie_ac4').val();

                let naamActiviteit5 = $('#naam_ac5').val();
                let naamInstantie5 = $('#naam_instantie_ac5').val();
                let startdatumActiviteit5 = $('#startdatum_ac5').val();
                let einddatumActiviteit5 = $('#einddatum_ac5').val();
                let overigeInformatieActiviteit5 = $('#overige_informatie_ac5').val();

                let naamActiviteit6 = $('#naam_ac6').val();
                let naamInstantie6 = $('#naam_instantie_ac6').val();
                let startdatumActiviteit6 = $('#startdatum_ac6').val();
                let einddatumActiviteit6 = $('#einddatum_ac6').val();
                let overigeInformatieActiviteit6 = $('#overige_informatie_ac6').val();
        */


        let rij = opleidingen[0];

        if (typeof rij !== "undefined") {
            doc.text(40, 27, rij.voornaam);
            doc.setFontSize(10);
            doc.text(40, 32, rij.achternaam);
            doc.text(40, 37, rij.adresgegevens);
            doc.text(65, 37, rij.postcode);
            doc.text(90, 37, rij.woonplaats);
            doc.text(40, 42, rij.telefoon);
            doc.text(40, 47, rij.email);
            doc.text(40, 52, rij.geboortedatum);
            doc.text(40, 57, rij.geboorteplaats);
            doc.text(40, 62, rij.nationaliteit);


        } else {
            alert("Vul eerst de vereiste velden in!");
        }


        // hier foreach

        let i;

        for (i = 0; i < opleidingen.length; i++) {
            rij = opleidingen[i];

            doc.text(110, 27, rij.naamOpleiding);
            doc.setFontSize(10);
            doc.text(110, 32, rij.naamInstituut);
            doc.text(110, 37, rij.startdatum);
            doc.text(110, 42, rij.einddatum);
            doc.text(110, 47, rij.overigeInformatie);

            doc.text(110, 60, rij.naamOpleiding);
            doc.text(110, 65, rij.naamInstituut);
            doc.text(110, 70, rij.startdatum);
            doc.text(110, 75, rij.einddatum);
            doc.text(110, 80, rij.overigeInformatie);

        }

        /*

        doc.text(40, 27, voornaam);
        doc.setFontSize(10);
        doc.text(40, 32, achternaam);
        doc.text(40, 37, adresgegevens);
        doc.text(40, 42, telefoon);
        doc.text(40, 47, email);
        doc.text(40, 52, geboortedatum);
        doc.text(40, 57, geboorteplaats);
        doc.text(40, 62, nationaliteit);

        doc.setFontSize(25);

        doc.text(110, 27, naamOpleiding);
        doc.setFontSize(10);
        doc.text(110, 32, naamInstituut);
        doc.text(110, 37, startdatum);
        doc.text(110, 42, einddatum);
        doc.text(110, 47, overigeInformatie);

        doc.setFontSize(25);
        doc.text(110, 60, naamOpleiding2);
        doc.setFontSize(10);
        doc.text(110, 65, naamInstituut2);
        doc.text(110, 70, startdatum2);
        doc.text(110, 75, einddatum2);
        doc.text(110, 80, overigeInformatie2);

        doc.setFontSize(25);
        doc.text(110, 93, naamOpleiding3);
        doc.setFontSize(10);
        doc.text(110, 98, naamInstituut3);
        doc.text(110, 103, startdatum3);
        doc.text(110, 108, einddatum3);
        doc.text(110, 113, overigeInformatie3);

        doc.setFontSize(25);
        doc.text(110, 126, naamOpleiding4);
        doc.setFontSize(10);
        doc.text(110, 131, naamInstituut4);
        doc.text(110, 136, startdatum4);
        doc.text(110, 141, einddatum4);
        doc.text(110, 146, overigeInformatie4);

        doc.setFontSize(25);
        doc.text(110, 159, naamOpleiding5);
        doc.setFontSize(10);
        doc.text(110, 164, naamInstituut5);
        doc.text(110, 169, startdatum5);
        doc.text(110, 174, einddatum5);
        doc.text(110, 179, overigeInformatie5);

        doc.setFontSize(25);
        doc.text(110, 192, naamOpleiding6);
        doc.setFontSize(10);
        doc.text(110, 197, naamInstituut6);
        doc.text(110, 202, startdatum6);
        doc.text(110, 207, einddatum6);
        doc.text(110, 212, overigeInformatie6);

        doc.setFontSize(25);
        doc.text(110, 225, naamOpleiding7);
        doc.setFontSize(10);
        doc.text(110, 230, naamInstituut7);
        doc.text(110, 235, startdatum7);
        doc.text(110, 240, einddatum7);
        doc.text(110, 245, overigeInformatie7);

        doc.setFontSize(25);
        doc.text(110, 258, naamOpleiding8);
        doc.setFontSize(10);
        doc.text(110, 263, naamInstituut8);
        doc.text(110, 268, startdatum8);
        doc.text(110, 273, einddatum8);
        doc.text(110, 278, overigeInformatie8);

        doc.setFontSize(25);
        doc.text(5, 93, naamActiviteit);
        doc.setFontSize(10);
        doc.text(5, 98, naamInstantie);
        doc.text(5, 103, startdatumActiviteit);
        doc.text(5, 108, einddatumActiviteit);
        doc.text(5, 113, overigeInformatieActiviteit);

        doc.setFontSize(25);
        doc.text(5, 126, naamActiviteit2);
        doc.setFontSize(10);
        doc.text(5, 131, naamInstantie2);
        doc.text(5, 136, startdatumActiviteit2);
        doc.text(5, 141, einddatumActiviteit2);
        doc.text(5, 146, overigeInformatieActiviteit2);

        doc.setFontSize(25);
        doc.text(5, 159, naamActiviteit3);
        doc.setFontSize(10);
        doc.text(5, 164, naamInstantie3);
        doc.text(5, 169, startdatumActiviteit3);
        doc.text(5, 174, einddatumActiviteit3);
        doc.text(5, 179, overigeInformatieActiviteit3);

        doc.setFontSize(25);
        doc.text(5, 192, naamActiviteit4);
        doc.setFontSize(10);
        doc.text(5, 197, naamInstantie4);
        doc.text(5, 202, startdatumActiviteit4);
        doc.text(5, 207, einddatumActiviteit4);
        doc.text(5, 212, overigeInformatieActiviteit4);

        doc.setFontSize(25);
        doc.text(5, 225, naamActiviteit5);
        doc.setFontSize(10);
        doc.text(5, 230, naamInstantie5);
        doc.text(5, 235, startdatumActiviteit5);
        doc.text(5, 240, einddatumActiviteit5);
        doc.text(5, 245, overigeInformatieActiviteit5);

        doc.setFontSize(25);
        doc.text(5, 258, naamActiviteit6);
        doc.setFontSize(10);
        doc.text(5, 263, naamInstantie6);
        doc.text(5, 268, startdatumActiviteit6);
        doc.text(5, 273, einddatumActiviteit6);
        doc.text(5, 278, overigeInformatieActiviteit6);

        */


        doc.save('CV ' + rij.voornaam + '' + rij.achternaam + '.pdf');


    });

    $('.next').click(function () {
        $(this).parent().hide().next().show();//hide parent and show next
    });
    $('.back').click(function () {
        $(this).parent().hide().prev().show();//hide parent and show previous
    });


});
