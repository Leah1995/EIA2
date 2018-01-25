var Form;
(function (Form) {
    window.addEventListener("load", init);
    let schmuck = ["glitzernde Kugeln (bunt)", "matte Kugeln (bunt)", "silberne Kugeln", "goldene Kugeln", "Lametta", "tanzende Figuren"];
    let baumkrone = ["Engel", "Sternschnuppe", "Klassischer Stern"];
    let treetype = ["Blaufichte", "Douglasie", "Grünfichte", "Weissfichte"]
    let halterung = ["grün", "gold", "braun", "silber"];
    let anzahl = 0;
    let numberFields = [];
    console.log("arrays");

    let toppingCheckboxes = [];
    let toppingNumber = 0;
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        //EventListener an fieldsets
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
        document.getElementById("container").innerText = halterung[0];
        document.getElementById("check").addEventListener("click", handleChange);
        createContainerField();
        //2.Version
        createFlavorField();
        createToppingField();
    }
    console.log("komma");
    
    
    function calculatePrice() {
        let scoopPrice = 0.8;
        let toppingPrice = toppingNumber * 45;
        let sum = anzahl * scoopPrice + toppingPrice;
        document.getElementById("total").textContent = "" + (sum.toFixed(2)) + "";
        console.log("Kugeln: " + anzahl + "|Kugelpreis: " + scoopPrice + "|toppinganzahl:" + "|toppingPrice:" + toppingPrice);
    }
    console.log("scoop");
    function handleChange(_event) {
    	
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
                
        if (this.id == "radio") {
        }
        if (this.id == "check") {
            let addressField = document.getElementById("address");
            let inputFields = addressField.getElementsByTagName("input");
            console.log("a");
            for (let i = 0; i < inputFields.length; i++) {
                let image = document.getElementById("checkImg");
                if (inputFields[i].checkValidity() == false) {
                    image.src = "Versuche es nochmal";
                    console.log("false");
                    image.style.display = "inline";
                    inputFields[i].style.backgroundColor = "red";
                }
                else {
                    image.src = "Bestellung wird abgeschickt";
                    console.log("true");
                    image.style.display = "inline";
                    inputFields[i].style.backgroundColor = "#0F924A";
                }
            }
        }
        console.log("adresse");

        if (this.className == "flavorField") {
            anzahl = 0;
            let outputField = document.getElementById("schmuckOutput");
            outputField.innerText = "";
            for (let i = 0; i < numberFields.length; i++) {
                let valueString = numberFields[i].value;
                anzahl += parseInt(valueString);
                if (parseInt(numberFields[i].value) > 0) {
                    outputField.innerHTML += numberFields[i].id + ": " + numberFields[i].value + "<br>";
                }
            }
            calculatePrice();
            console.log("value");
        }
        
        let toppingOutput = document.getElementById("topping");
        let toppingField = document.getElementById("toppings");
        toppingOutput.innerText = "";
        let toppingCheckboxes = toppingField.getElementsByTagName("input");
        toppingNumber = 0;
        console.log(toppingCheckboxes);
        for (let i = 0; i < toppingCheckboxes.length; i++) {
            if (toppingCheckboxes[i].checked == true) {
                toppingOutput.innerHTML += toppingCheckboxes[i].value + "<br>";
                toppingCheckboxes[i].disabled = false;
                toppingNumber++;
            }
            if (toppingCheckboxes[i].checked == false) {
                if (toppingNumber >= anzahl) {
                    toppingCheckboxes[i].disabled = true;
                }
                else {
                    toppingCheckboxes[i].disabled = false;
                }
            }
            
            calculatePrice();
        }
        console.log("price");

        if (this.name == "containerChoice") {
            document.getElementById("container").innerText = target.value;
        }
    }

    function createContainerField() {
        let containerField = document.createElement("fieldset");
        containerField.id = "radio";
        let mainDiv = document.getElementById("main");
        mainDiv.appendChild(containerField);
        let legend = document.createElement("legend");
        legend.innerText = "HALTERUNG";
        containerField.appendChild(legend);
        let containerCheckboxes = [];
        //Behälter-Optionen für Array-Einträge
        for (let i = 0; i < halterung.length; i++) {
            let container = document.createElement("input");
            container.type = "radio";
            container.value = halterung[i];
            container.name = "containerChoice";
            container.id = "radio" + i + 1;
            containerField.appendChild(container);
            containerCheckboxes.push(container);
            containerCheckboxes[0].checked = true;
            //Labels für Behälterauswahl
            let containerLabel = document.createElement("label");
            containerLabel.textContent = halterung[i];
            containerLabel.htmlFor = "radio" + i + 1;
            containerField.appendChild(containerLabel);
            container.addEventListener("change", handleChange); //listener an Auswahl
        }
    }
    
    function createFlavorField() {
        //flavorField erstellen
        let flavorField = document.createElement("fieldset");
        flavorField.className = "flavorField";
        let mainDiv = document.getElementById("main");
        mainDiv.appendChild(flavorField);
        //Legende
        let legend = document.createElement("legend");
        legend.innerText = "SCHMUCK";
        flavorField.appendChild(legend);
        //Optionen für Array-Einträge
        for (let i = 0; i < schmuck.length; i++) {
            //Number-Feld für Schmuck-Anzahl
            let numberInput = document.createElement("input");
            numberInput.type = "number";
            numberInput.id = schmuck[i];
            numberInput.name = "numberInput";
            numberInput.step = "1";
            numberInput.min = "0";
            numberInput.max = "10";
            numberInput.value = "0";
            numberInput.style.display = "inline";
            flavorField.appendChild(numberInput);
            numberFields.push(numberInput);
            let nrLabel = document.createElement("label");
            nrLabel.textContent = schmuck[i];
            nrLabel.htmlFor = numberInput.id;
            flavorField.appendChild(nrLabel);
            nrLabel.addEventListener("change", handleChange);
            flavorField.addEventListener("change", handleChange); //eventListener an Select-Feld
            numberInput.addEventListener("change", handleChange); //eventListener an anzahl-Feld
        } //createFlavorField
    }
    
    function createToppingField() {
        //toppingField erstellen
        let toppingField = document.createElement("fieldset");
        toppingField.id = "toppings";
        let mainDiv = document.getElementById("main");
        mainDiv.appendChild(toppingField);
        //Legende
        let legend = document.createElement("legend");
        legend.innerText = "BAUMKRONE";
        toppingField.appendChild(legend);
        toppingField.addEventListener("change", handleChange);
        //checkbox für Array-Einträge
        for (let i = 0; i < baumkrone.length; i++) {
            let topping = document.createElement("input");
            topping.type = "checkbox";
            topping.value = baumkrone[i];
            topping.name = "toppingCheckbox";
            topping.id = "Checkbox" + i;
            toppingField.appendChild(topping);
            toppingCheckboxes.push(topping);
            //Label für checkboxen
            let toppingLabel = document.createElement("label");
            toppingLabel.textContent = baumkrone[i];
            toppingLabel.htmlFor = topping.id;
            toppingField.appendChild(toppingLabel);
        }
    }
})(Form || (Form = {})); //namespace
//# sourceMappingURL=Aufg10.js.map