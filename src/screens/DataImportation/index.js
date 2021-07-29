import React, { Component } from 'react';
import AfdService from '../../services/afd';

class DataImportation extends Component {
    constructor() {
        super();
        this.state = {
            name: 'AFD'
        };
    }

    showFile = async () => {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            var preview = document.getElementById('show-text');
            var file = document.querySelector('input[type=file]').files[0];
            var reader = new FileReader()

            var textFile = /text.*/;

            if (file.type.match(textFile)) {
                reader.onload = function (event) {
                    preview.innerHTML = event.target.result;
                }
            } else {
                preview.innerHTML = "<span class='error'>No file!</span>";
            }
            let afd = await file.text();

            let data = {afd}
            
            AfdService.create(data);

            alert("Sucesso!");

        } else {
            alert("Error!");
        }
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.showFile} />
                <div id="show-text">AFD</div>
            </div>
        );
    }
}

export default DataImportation;