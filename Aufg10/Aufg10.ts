namespace Form {
    window.addEventListener("load", init);

    // Arrays
    let flavors: string[] = ["glitzernde Kugeln (bunt)", "matte Kugeln (bunt)", "silber Kugeln", "goldene Kugeln", "Lametta", "tanzende Figuren"];
    let toppings: string[] = ["Engel", "Sternschnuppe", "Klassischer Stern"];
    let containers: string[] = ["grün", "gold", "braun", "silber"];
    let articleNumber: number = 0;
    let numberFields: HTMLInputElement[] = [];
    let toppingCheckboxes: HTMLInputElement[] = [];
    let toppingNumber: number = 0;
    console.log("d");


    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset"); // fieldset = gruppiert verwandte Elemente in einer Form

        // EventListener an fieldsets
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);

        } // for-Schleife Ende

        document.getElementById("container").innerText = containers[0];
        document.getElementById("check").addEventListener("click", handleChange);

        createContainerField();
        createSchmuckField();
        createToppingField();
        
    } // Function Ende


    function calculatePrice(): void {
        let articlePrice: number = 1;
        let toppingPrice: number = toppingNumber * 0.4;
        let sum: number = articleNumber * articlePrice + toppingPrice;

        document.getElementById("total").textContent = "" + (sum.toFixed(2)) + "€";
        console.log("Kugeln: " + articleNumber + "|Kugelpreis: " + articlePrice + "|toppinganzahl:" + "|toppingPrice:" + toppingPrice);

    } // Function Ende

    function handleChange(_event: Event): void {

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);

        if (this.id == "radio"): void {
            //
        }

        if (this.id == "check") {
            let addressField: HTMLElement = document.getElementById("address");
            let inputFields: NodeListOf<HTMLInputElement> = addressField.getElementsByTagName("input");
            for (let i: number = 0; i < inputFields.length; i++) {
                let image: HTMLImageElement = <HTMLImageElement>document.getElementById("checkImg");

                if (inputFields[i].checkValidity() == false) {
                    image.src = "Bitte nochmal versuchen";
                    console.log("false");
                    image.style.display = "inline";
                    inputFields[i].style.backgroundColor = "#0F924A";
                }
                else {
                    image.src = "Bestellung wird abgeschickt";
                    console.log("true");
                    image.style.display = "inline";
                    inputFields[i].style.backgroundColor = "#0F924A";
                }

            } // for-Schleife Ende

        } // Ende if-Bedingung


        if (this.className == "schmuckField") {
            articleNumber = 0;
            let outputField: HTMLElement = document.getElementById("schmuckOutput");
            outputField.innerText = "";
            for (let i: number = 0; i < numberFields.length; i++) {
                let valueString: string = numberFields[i].value;
                articleNumber += parseInt(valueString);

                if (parseInt(numberFields[i].value) > 0) {
                    outputField.innerHTML += numberFields[i].id + ": " + numberFields[i].value + "<br>";
                }
            } // for-Schleife Ende

            calculatePrice();

        } // if-Bedinung Ende

        console.log("Changed " + target.name + " to " + target.value);
        let toppingOutput: HTMLElement = document.getElementById("topping");
        let toppingField: HTMLElement = document.getElementById("toppings");
        toppingOutput.innerText = "";
        let toppingCheckboxes: NodeListOf<HTMLInputElement> = toppingField.getElementsByTagName("input");
        toppingNumber = 0;

        for (let i: number = 0; i < toppingCheckboxes.length; i++) {

            if (toppingCheckboxes[i].checked == true) {
                toppingOutput.innerHTML += toppingCheckboxes[i].value + "<br>";
                toppingCheckboxes[i].disabled = false;
                toppingNumber++;
            }

            if (toppingCheckboxes[i].checked == false) {
                if (toppingNumber >= articleNumber) {
                    toppingCheckboxes[i].disabled = true;
                }
                else {
                    toppingCheckboxes[i].disabled = false;
                }
            }

            calculatePrice();

        } // for-Schleife Ende


        if (this.name == "containerChoice") {

            document.getElementById("container").innerText = target.value;
        }

    } // Function Ende


    function createContainerField(): void {
        let containerField: HTMLFieldSetElement = document.createElement("fieldset");
        containerField.id = "radio";
        let mainDiv: HTMLElement = document.getElementById("main");
        mainDiv.appendChild(containerField);

        //Legende für containerField
        let legend: string = document.createElement("legend");
        legend.innerText = "Halterung";
        containerField.appendChild(legend);
        let containerCheckboxes: HTMLInputElement[] = [];

        //Behälter-Optionen für Array-Einträge
        for (let i: number = 0; i < containers.length; i++) {
            let container: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            container.type = "radio";
            container.value = containers[i];
            container.name = "containerChoice";
            container.id = "radio" + i + 1;
            containerField.appendChild(container);

            containerCheckboxes.push(container);
            containerCheckboxes[0].checked = true;

            //Labels
            let containerLabel: HTMLLabelElement = document.createElement("label");
            containerLabel.textContent = containers[i];
            containerLabel.htmlFor = "radio" + i + 1;
            containerField.appendChild(containerLabel);
            container.addEventListener("change", handleChange); //listener an Auswahl

        } // for-Schleife Ende
    } // Function Ende



    function createSchmuckField(): void {
        // Field erstellen
        let flavorField: HTMLFieldSetElement = document.createElement("fieldset");
        flavorField.className = "schmuckField";
        let mainDiv: HTMLElement = document.getElementById("main");
        mainDiv.appendChild(flavorField);

        // Legende
        let legend: HTMLLegendElement = document.createElement("legend");
        legend.innerText = "Schmuck";
        schmuckField.appendChild(legend);

        // Optionen für Array-Einträge
        for (let i: number = 0; i < flavors.length; i++) {

            //Number-Feld
            let numberInput: HTMLInputElement = document.createElement("input");
            numberInput.type = "number";
            numberInput.id = flavors[i];
            numberInput.name = "numberInput";
            numberInput.step = "1";
            numberInput.min = "1";
            numberInput.max = "5";
            numberInput.value = "0";
            numberInput.style.display = "inline";
            schmuckField.appendChild(numberInput);
            numberFields.push(numberInput);

            let nrLabel: HTMLLabelElement = document.createElement("label");
            nrLabel.textContent = flavors[i];
            nrLabel.htmlFor = numberInput.id;
            schmuckField.appendChild(nrLabel);
            nrLabel.addEventListener("change", handleChange);


            schmuckField.addEventListener("change", handleChange); // eventListener an schmuckSelect-Feld
            numberInput.addEventListener("change", handleChange); // eventListener an articleNumber-Feld
        } // create Field
    } // Function Ende

    function createToppingField(): void {

        //toppingField erstellen
        let toppingField: HTMLFieldSetElement = document.createElement("fieldset");
        toppingField.id = "Beleuchtung";
        let mainDiv: HTMLElement = document.getElementById("main"); // getElementByID = durchsucht DOM und liefert einen Verweis auf das Objekt und die benötigte ID
        mainDiv.appendChild(toppingField);

        //Legende
        let legend: HTMLLegendElement = document.createElement("legend");
        legend.innerText = "Füge eine Beleuchtung hinzu";
        toppingField.appendChild(legend); // fügt Text hinzu
        toppingField.addEventListener("change", handleChange);

        //checkbox für Array-Einträge
        for (let i: number = 0; i < toppings.length; i++) {
            let topping: HTMLElement = document.createElement("input");
            topping.type = "checkbox";
            topping.value = toppings[i];
            topping.name = "toppingCheckbox";
            topping.id = "Checkbox" + i;
            toppingField.appendChild(topping);
            toppingCheckboxes.push(topping)

            //Label für checkboxen
            let toppingLabel: HTMLElement = document.createElement("label");
            toppingLabel.textContent = toppings[i];
            toppingLabel.htmlFor = topping.id;
            toppingField.appendChild(toppingLabel);

        } // for-Schleife Ende
    } // Function Ende


} //namespace