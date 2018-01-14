namespace Form {
    window.addEventListener("load", init);

    let flavors: string[] = ["glitzernde Kugeln (bunt)", "matte Kugeln (bunt)", "silber Kugeln", "goldene Kugeln", "Lametta", "tanzende Figuren"];
    let toppings: string[] = ["Engel", "Sternschnuppe", "Klassischer Stern", "Whipped Cream", "Grated Coconut", "Vanilla Sauce", "Rainbow Sprinkles"];
    let containers: string[] = ["grün", "gold", "braun", "silber"];
    let scoopNumber: number = 0;
    let numberFields: HTMLInputElement[] = [];
    let toppingCheckboxes: HTMLInputElement[] = [];
    let toppingNumber: number = 0;


    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        //EventListener an fieldsets
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
        document.getElementById("container").innerText = containers[0];
        document.getElementById("check").addEventListener("click", handleChange);
        createContainerField();

        
        createSchmuckField();
        createToppingField();
    }




    function calculatePrice(): void {
        let scoopPrice: number = 1;
        let toppingPrice: number = toppingNumber * 0.4;
        let sum: number = scoopNumber * scoopPrice + toppingPrice;

        document.getElementById("total").textContent = "" + (sum.toFixed(2)) + "€";
        console.log("Kugeln: " + scoopNumber + "|Kugelpreis: " + scoopPrice + "|toppinganzahl:" + "|toppingPrice:" + toppingPrice);

    }

    function handleChange(_event: Event): void {
        //console.log(_event);
        //*/
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);


        // this == _event.currentTarget in an event-handler
        if (this.id == "radio"): number; {
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
                } else {
                    image.src = "Bestellung wird abgeschickt";
                    console.log("true");
                    image.style.display = "inline";
                    inputFields[i].style.backgroundColor = "#0F924A";
                }
            }
        }


        if (this.className == "schmuckField") {
            scoopNumber = 0;
            let outputField: HTMLElement = document.getElementById("schmuckOutput");
            outputField.innerText = "";
            for (let i: number = 0; i < numberFields.length; i++) {
                let valueString: string = numberFields[i].value;
                scoopNumber += parseInt(valueString);

                if (parseInt(numberFields[i].value) > 0) {
                    outputField.innerHTML += numberFields[i].id + ": " + numberFields[i].value + "<br>";
                }
            }
            calculatePrice();
        }


        
        console.log("Changed " + target.name + " to " + target.value);
        let toppingOutput: HTMLElement = document.getElementById("topping");
        let toppingField: HTMLElement = document.getElementById("toppings");
        toppingOutput.innerText = "";
        let toppingCheckboxes: NodeListOf<HTMLInputElement> = toppingField.getElementsByTagName("input");
        toppingNumber = 0;

        console.log(toppingCheckboxes);

        for (let i: number = 0; i < toppingCheckboxes.length; i++) {
            if (toppingCheckboxes[i].checked == true) {
                toppingOutput.innerHTML += toppingCheckboxes[i].value + "<br>";
                toppingCheckboxes[i].disabled = false;
                toppingNumber++;
            }

            if (toppingCheckboxes[i].checked == false) {
                if (toppingNumber >= scoopNumber) {
                    toppingCheckboxes[i].disabled = true;
                } else {
                    toppingCheckboxes[i].disabled = false;
                }
            }
            
            calculatePrice();
        }


        if (this.name == "containerChoice") {

            document.getElementById("container").innerText = target.value;
        }
    }


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
        }
    }



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
            numberInput.addEventListener("change", handleChange); // eventListener an scoopNumber-Feld
        } // create Field
    }

    function createToppingField(): void {

        //toppingField erstellen
        let toppingField: HTMLFieldSetElement = document.createElement("fieldset");
        toppingField.id = "Beleuchtung";
        let mainDiv: HTMLElement = document.getElementById("main");
        mainDiv.appendChild(toppingField);

        //Legende
        let legend: HTMLLegendElement = document.createElement("legend");
        legend.innerText = "Füge eine Beleuchtung hinzu";
        toppingField.appendChild(legend);
        toppingField.addEventListener("change", handleChange);

        //checkbox für Array-Einträge
        for (let i: number = 0; i < toppings.length; i++) {
            let topping: HTMLElement = document.createElement("input");
            topping.type = "checkbox";
            topping.value = toppings[i];
            topping.name = "toppingCheckbox";
            topping.id = "Checkbox" + i;
            toppingField.appendChild(topping);
            toppingCheckboxes.push(topping);


            //Label für checkboxen
            let toppingLabel: HTMLElement = document.createElement("label");
            toppingLabel.textContent = toppings[i];
            toppingLabel.htmlFor = topping.id;
            toppingField.appendChild(toppingLabel);
        }
    }


} //namespace