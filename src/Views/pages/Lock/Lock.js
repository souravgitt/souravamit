import React from 'react';
import * as AiIcons from 'react-icons/ai';

function Lock() {
    return (
        <div class="userlock">
            <div class="userlock-form">
                <div class="userlockImg">
                    <img src="./assets/images/lock.png" />
                </div>
                <div class="form-group">
                    <div class="input-group" id="txtPass">
                        <input class="form-control" data-val="true" data-val-required="Password is required." id="Password" name="Password" placeholder="Password" type="password" value="" />
                        <div class="input-group-btn">
                            <button class="btn btn-default" type="submit" id="btnlocscreen">
                                <AiIcons.AiOutlineArrowRight />
                            </button>
                        </div>
                    </div>
                    <span class="field-validation-valid text-danger" data-valmsg-for="Password" data-valmsg-replace="true"></span>
                </div>
                <span class="field-validation-error text-danger"></span>
            </div>
        </div>
    )
}

export default Lock;