import $ from 'jquery'
import fitvids from 'fitvids'
import mediumZoom from 'medium-zoom'
import {
  adjustImageGallery,
  managePostImages,
  makeImagesZoomable
} from './utils/helpers'

$(() => {
  fitvids('.js-post-content')
  adjustImageGallery()
  managePostImages($)
  makeImagesZoomable($, mediumZoom)
})
