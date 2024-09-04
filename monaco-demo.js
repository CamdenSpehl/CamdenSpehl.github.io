/* eslint-env browser */

import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
// @ts-ignore
import { MonacoBinding } from 'y-monaco'
import * as monaco from 'monaco-editor'

self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    if (label === 'json') {
      return '/dist/json.worker.bundle.js'
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return '/dist/css.worker.bundle.js'
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return '/dist/html.worker.bundle.js'
    }
    if (label === 'typescript' || label === 'javascript') {
      return '/dist/ts.worker.bundle.js'
    }
    return '/dist/editor.worker.bundle.js'
  }
}

window.addEventListener('load', () => {
  const ydoc = new Y.Doc()
  const provider = new WebsocketProvider('wss://live-edit.classla.org:8080', 'monaco', ydoc)
  const type = ydoc.getText('monaco')

  const editor = monaco.editor.create(/** @type {HTMLElement} */ (document.getElementById('monaco-editor')), {
    value: '',
    language: 'javascript',
    theme: 'vs-dark'
  })
  const monacoBinding = new MonacoBinding(type, /** @type {monaco.editor.ITextModel} */ (editor.getModel()), new Set([editor]), provider.awareness)

  const connectBtn = /** @type {HTMLElement} */ (document.getElementById('y-connect-btn'))
  connectBtn.addEventListener('click', () => {
    if (provider.shouldConnect) {
      provider.disconnect()
      connectBtn.textContent = 'Connect'
    } else {
      provider.connect()
      connectBtn.textContent = 'Disconnect'
    }
  })

  // @ts-ignore
  window.example = { provider, ydoc, type, monacoBinding }
})