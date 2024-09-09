# Project 1: Images of the Russian Empire - Colorizing the Prokudin-Gorskii Photo Collection

## Overview
The goal of this assignment is to take the digitized Prokudin-Gorskii glass plate images and, using image processing techniques, automatically produce a color image with as few visual artifacts as possible. In order to do this, I extracted the three color channel images, place them on top of each other, and align them so that they form a single RGB color image.

## Approach
For the low resolution image, I initially computed the alignment with brute force, calculating the score between the base channel and displacement channel with normalized cross correlation, but the result isn't quite promising. The issue is resolved after I removed a percentage (default to 10%) of the border to prevent aligning the edges of the images.

<div style="display: flex; justify-content: space-around;">
  <figure>
    <img src="images/cathedral_off.jpg" alt="Image 1" style="width: 30%;">
    <figcaption>without border crop</figcaption>
  </figure>
  <figure>
    <img src="images/cathedral_perfect.jpg" alt="Image 2" style="width: 30%;">
    <figcaption>with border crop</figcaption>
  </figure>
</div>


For the high resolution image, I utilized image pyramid, where the image is downscaled to a certain level and applying the alignment process from the most-coarse level. By default, I set the scaling factor to 2 and levels to 5. This works reasonably well for most of the high resolution image, except for a few such as the image with label "emir". This in turn was resolved by utilizing sobel edge detection, which computes the gradient of the image intensity at each pixel, emphasizing regions where the intensity changes sharply.