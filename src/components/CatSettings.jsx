import React from 'react';
import './css/factory.css';
import './css/mystyle.css';

export default function CatSettings() {
    return (
        <div className="col-lg-7 cattributes m-2 light-b-shadow">
        <div id="catColors">
            <div className="form-group">
                <label for="formControlRange"><b>Head and body</b><span className="badge badge-dark ml-2" id="headcode"></span></label>
                <input type="range" min="10" max="98" className="form-control-range" id="bodyColor"/>
            </div>
            <div className="form-group">
                <label for="formControlRange"><b>Accent color</b><span className="badge badge-dark ml-2" id="accentcode"></span></label>
                <input type="range" min="10" max="98" className="form-control-range" id="accentColor"/>
            </div>
            <div className="form-group">
                <label for="formControlRange"><b>Eye color</b><span className="badge badge-dark ml-2" id="eyecode"></span></label>
                <input type="range" min="10" max="98" className="form-control-range" id="eyeColor"/>
            </div>
            <div className="form-group">
                <label for="formControlRange"><b>Ear color</b><span className="badge badge-dark ml-2" id="earcode"></span></label>
                <input type="range" min="10" max="98" className="form-control-range" id="earColor"/>
            </div>

            <div className="form-group">
                <label for="formControlRange"><b>Eye shape</b><span className="badge badge-dark ml-2" id="eyeName"></span></label>
                <input type="range" min="1" max="7" step={1} className="form-control-range" id="eyeShape"/>
            </div>
        </div>

    </div>
    )
}