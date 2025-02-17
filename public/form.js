//-----------------------------------------------------------------------------------------------------------------------------

//const prenota=document.getElementById("Controls");

// Creata la form
const createForm = (parentElement) => {
    let data;
    let callback = null;

    return {
        setLabels: (labelsAndType) => {
            data = labelsAndType;
        },
        onsubmit: (callbackInput) => {
            callback = callbackInput
        },

        prenota: (document.getElementById("Controls")).onclick=function(){
            creaModale();
        },

        creaModale:() =>{
            document.body.innerHTML += `
                <div class="modal fade" id="dynamicModal" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>  
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        
            const modal = new bootstrap.Modal(document.getElementById('dynamicModal'));
            modal.show();           
            document.getElementById('dynamicModal').addEventListener('hidden.bs.modal', function () {
                document.getElementById('dynamicModal').remove();
            });
        },
        
        render: () => {
            for (let key in data) {
                parentElement.innerHTML += `<div>${key}\n<input id="${key}" type="${data[key]}"/></div>` + '\n';
            }

            parentElement.innerHTML += "<button type='button' id='prenota'>Prenota</button>";

            document.querySelector("#submit").onclick = () => {
                const result = Object.keys(data).map((name) => {
                    return document.querySelector("#" + name).value;
                });

                document.querySelector("#prenota").onclick = () => {
                    const result = Object.keys(data).map((name) => {
                        return document.querySelector("#" + name).value;
                    });
                    
                    
                };


                callback(result);
            }
            
        }
            
    }
}


//-----------------------------------------------------------------------------------------------------------------------------------