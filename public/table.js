




export const createTable = (parentElement) => {
    let dati=null;
    let istance;
    let callback;
  istance ={
    
   setcallback:(cb)=>{
callback=cb;
   },
    render: () => {
     
              let html = `
                        <div class="container">
      <form class="inserimento">
    
  
  <input type="number" id="X"aria-label="X" class="form-control in" placeholder="X">
  <input type="number" id="Y"aria-label="Y" class="form-control in"placeholder="Y">
      <button type="button" id="Aggiungi" class="btn btn-dark" >Aggiungi</button>
      <button type="button" id="Calcola" class="btn btn-success">Calcola</button>
  <input id="file" name="file" class="form-control "placeholder="Insercisci CSV"type="file" single>
  <button type="button" id="CaricaCSV" class="btn btn-dark b1"><img class="i-upload" src="assets/images/csv.png" alt="tab" /> Aggiungi da CSV</button>
    </form>

    
    <div class="mt-4" id="tab">
        <table class="table table-bordered tabellina radius">
            <thead class="table-dark titolo">
                <tr >
                <th scope="col" class="px-6 py-3">
                       ora
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Lunedì
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Martedì
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Mercoledì
                    </th>
                     <th scope="col" class="px-6 py-3">
                        Giovedì
                    </th>
                     <th scope="col" class="px-6 py-3">
                        Venerdì
                    </th>
                </tr>
            </thead>
            <tbody >`;
            let ora=8;
            for(let i=0;i<dati.x.length;i++){
                
                html+= `
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">` +
ora+
`</th>
<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">` +
dati[i].l +
`</th>
<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">` +
dati[i].ma +
`</th>
<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">` +
dati[i].me +
`</th>
<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">` +
dati[i].g+
`</th>
<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">` +
dati[i].v +
`</th>
                    
                </tr>`;
                ora+=1;
            }

             

              html += `
                                </tbody>
                            </table>
                        </div>
                    </div>
                        `;

              parentElement.innerHTML = html;

    },
    
    load: function () {
        return fetch("/lin")
            .then(response => response.json())
            .then(json => {
                console.info("sono qui dentro ");
                dati = json.dati;
                istance.render();
                return json;
            })
            .catch(error => { throw error; });
    }
    
  };
  return istance;
};


/*
const get = 'https://ws.cipiaceinfo.it/cache/get';

const createTabella = (parentElement) => {
    let data = null;
    console.log(parentElement);
    let header = "";
    
    return {
        build: (dati) => {
            data = dati;
        },
        creaheader: () => {
            header = "<table class='table' border='1'><thead>";
            header += "<th>ORE</th>";
            header += data.map(t => `<th>${t}</th>`).join(""); 
            header += "</thead><tbody>";
           // console.log(parentElement);
            parentElement.innerHTML = header;
        },
        crea: (listadata, hours, type) => {
            
            let Row = "";
            let key = Object.keys(listadata); // ottieni le chiavi del dizionario che dovrà essere formato da data###ora###nome
            console.log("List data = ");
            console.log(listadata);
            for (let i = 0; i < 5; i++) {
                let valoreorariotabella = [];
                for (let j = 0; j < key.length; j++) {
                    let val = key[j].split("###");
                    if(val[2]===type){
                    if (val[1] == hours[i]) {
                       // console.log("chiave = " + key[j]);
                       // console.log("list data di key = " + listadata[key[j]]);
                        valoreorariotabella.push(listadata[key[j]]);
                    }
                }
                }
               // console.log(hours);
                console.log("riga ="+valoreorariotabella);
                let htmlRow = "<tr><td>" + hours[i] + "</td>" + "<td>" + (valoreorariotabella[0] || "") + "</td>" + "<td>" + (valoreorariotabella[1] || "") + "</td>" + "<td>" + (valoreorariotabella[2] || "") + "</td>" + "<td>" + (valoreorariotabella[3] || "") + "</td>" + "<td>" + (valoreorariotabella[4] || "") + "</td>" + "</tr>" + "\n";
                Row += htmlRow;
            }
            parentElement.innerHTML = header + Row + "</tbody></table>"; // Aggiungi le righe alla tabella
        },
    };
}

//console.log(document);

let table = createTabella(document.getElementById("tabelle"));

// Funzione per ottenere la data della settimana corrente
const getDatesForWeek = (startDate) => {
    let dates = [];
    for (let i = 0; i < 5; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        const giorno = ("0" + date.getDate()).slice(-2);
        const mese = ("0" + (date.getMonth() + 1)).slice(-2);
        const anno = date.getFullYear();
        dates.push(`${giorno}/${mese}/${anno}`);
    }
    return dates;
};

// Ottieni la data attuale
const oggi = new Date();
let weekDates = getDatesForWeek(oggi);
table.build(weekDates);
table.creaheader();

let hours = ["8", "9", "10", "11", "12"];

//table.crea(test, hours); 
/*
let chiaviCache=Object.key(valcache);
for(let i=0;i<chiaviCache.lenght;i++){
    for(let j=0;j<;j++){
    if(chiavi_dizionario[j])
    }
}
    ///-------------------















const prendiDati = (myKey, myToken) => {
    return new Promise((resolve, reject) => {
        fetch(get, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "key": myToken
            },
            body: JSON.stringify({
                key: myKey
            })
        })
        .then(r => r.json())
        .then(r => {
            const data = JSON.parse(r.result);
            resolve(data);
        })
        .catch(error => reject(error));
    });
};

















 function creaDizionarioSettimana(dizionarioTipologie) {
    return new Promise((resolve,reject)=>{
        let valcache;
        let dizionario = {};
        prendiDati(myKey, myToken).then((valcache)=>{
            console.info("valcache = " + valcache);
            console.log(valcache);
            let oggi = new Date();
            let giornoSettimana = oggi.getDay();
            if (giornoSettimana === 6) { 
                oggi.setDate(oggi.getDate() + 2); 
            } else if (giornoSettimana === 0) { 
                oggi.setDate(oggi.getDate() + 1); 
            } else { 
                oggi.setDate(oggi.getDate() - (giornoSettimana - 1)); 
            }
            for (let i = 0; i < 5; i++) {
                let giorno = ("0" + oggi.getDate()).slice(-2);
                let mese = ("0" + (oggi.getMonth() + 1)).slice(-2);
                let anno = oggi.getFullYear();
                let data = `${giorno}/${mese}/${anno}`;

                for (let ora = 8; ora <= 12; ora++) {
                    //console.info(dizz);
                    let key=Object.keys(dizionarioTipologie);
                // console.info("lunghezza "+key.length);
                    for(let specializzazione=0;specializzazione<key.length;specializzazione++){
                        
                    //  console.info(key[specializzazione]);
                        let chiave = `${data}###${ora}###${key[specializzazione]}`;
                        dizionario[chiave] = "";
                    }
                    
                }
                oggi.setDate(oggi.getDate() + 1);
            }
            if(valcache!==null){
                for (let chiave in valcache) {
                    
                    if (dizionario[chiave] !== undefined && valcache[chiave] !== "") {
                        dizionario[chiave] = valcache[chiave];
                    }
                }
            }
            resolve(dizionario); // 
        });
    });
}
































 function main() {
    
    let testa =  creaDizionarioSettimana({"Cardiologia":"",
        "Psicologia":"",
        "Oncologia":"", 
        "Ortopedia":"",
        "Neurologia":""
     });
  //  console.log("prima testa");
  //  console.log(testa);
  //  console.log("dopo testa");
    //table.crea(testa, hours,"Oncologia"); 
}
main();

*/