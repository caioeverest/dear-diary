import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import logger from '../logger'
import config from '../config'
import { getData } from '../repository'

import Html from '../view/htmlBase.js'
import App from '../view/Pages/Home'

export default async (req, res, next) => {

  const data = await getData()
  const { html, css } = convertToHtmlAndCSS(App, req, data)
  const title = config.appInfo.app

  return res.send(
    Html({
      preloadedBoards: JSON.stringify(data.boards),
      body: html,
      styles: css,
      title,
    })
  )
}

const convertToHtmlAndCSS = (TargetTemplate, req, data) => {
  const sheet = new ServerStyleSheet()
  const html = renderWrapper(sheet.collectStyles(
    <TargetTemplate host={req.headers.host} preloadedBoards={data.boards}/>
  ))
  const styleText = sheet.getStyleTags()
  return { html, css: styleText }
}

const renderWrapper = obj => {
  try {
    return renderToString(obj)
  } catch (e) {
    logger.error('fail to render component: ', e)
  }
}

