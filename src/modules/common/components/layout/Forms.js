import React, { Component } from "react";

class Forms extends Component {
    render() {
        const authContent =
        <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Forms</h1>
            <div className="row mb-4">
                    <div className="col-lg-6">
                        <form>
                            <div className="form-group">
                                <input className="form-control" placeholder="text input"/>
                                <label className="control-label">Text Input</label>
                            </div>
                            <p className="help-block">Example block-level help text here.</p>
                            <div className="form-group">
                                <input className="form-control" placeholder="Enter text" />
                                <label className="control-label">Text Input with Placeholder</label>
                            </div>
                            <div className="form-group">
                                <label>Static Control</label>
                                <p className="form-control-static">email@example.com</p>
                            </div>
                            <div className="form-group">
                                <label>File input</label>
                                <input type="file" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="3"></textarea>
                                <label className="control-label">Text area</label>
                            </div>
                            <div className="form-group">
                                <label>Checkboxes</label>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="" />Checkbox 1
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="" />Checkbox 2
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="" />Checkbox 3
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Inline Checkboxes</label>
                                <label className="checkbox-inline">
                                    <input type="checkbox" />1
                                </label>
                                <label className="checkbox-inline">
                                    <input type="checkbox" />2
                                </label>
                                <label className="checkbox-inline">
                                    <input type="checkbox" />3
                                </label>
                            </div>
                            <div className="form-group">
                                <label>Radio Buttons</label>
                                <div className="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />Radio 1
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Radio 2
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" />Radio 3
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Inline Radio Buttons</label>
                                <label className="radio-inline">
                                    <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline1" value="option1" />1
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline2" value="option2" />2
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline3" value="option3" />3
                                </label>
                            </div>
                            <div className="form-group">
                                <label>Selects</label>
                                <select className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Multiple Selects</label>
                                <select multiple className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="action-container">
                                <button type="submit" className="btn btn-primary">Submit Button</button>
                                <button type="reset" className="btn btn-light">Reset Button</button>
                            </div>
                        </form>
                    </div>
                    {/* <!-- /.col-lg-6 (nested) --> */}
                    <div className="col-lg-6">
                        <form>
                            <fieldset disabled>
                                <div className="form-group">
                                    <label htmlFor="disabledSelect">Disabled input</label>
                                    <input className="form-control" id="disabledInput" type="text" placeholder="Disabled input" disabled />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="disabledSelect">Disabled select menu</label>
                                    <select id="disabledSelect" className="form-control">
                                        <option>Disabled select</option>
                                    </select>
                                </div>
                                <div className="checkbox mt-10">
                                    <label>
                                        <input type="checkbox" />Disabled Checkbox
                                </label>
                                </div>
                                <div className="action-container">
                                    <button type="submit" className="btn btn-primary">Disabled Button</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        return (
            <div>
                {authContent}
            </div>
        )
    }
}

export default Forms;
