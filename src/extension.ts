'use strict';

/**
 * This file is part of the vscode-easy-coffeescript distribution.
 * Copyright (c) Marcel Joachim Kloubert.
 * 
 * vscode-easy-coffeescript is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU Lesser General Public License as   
 * published by the Free Software Foundation, version 3.
 *
 * vscode-easy-coffeescript is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import * as vscode from 'vscode';

let isDeactivating = false;

export async function activate(context: vscode.ExtensionContext) {
    //TODO
}

export async function deactivate() {
    if (isDeactivating) {
        return;
    }
    isDeactivating = true;

    //TODO
}
