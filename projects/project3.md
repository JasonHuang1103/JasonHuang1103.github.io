# Project 3: Face Morphing and Modelling a Photo Collection

## Overview
The goal of this project is to produce a "morph" animation of my face into someone else's face. A morph is a simultaneous warp of the image shape and a cross-dissolve of the image colors. The cross-dissolve is the easy part; controlling and doing the warp is the hard part. The warp is controlled by defining a correspondence between the two pictures. The correspondence should map eyes to eyes, mouth to mouth, chin to chin, ears to ears, etc., to get the smoothest transformations possible.

## Part 1. Defining Correspondences
For this part, I used the correspondence tool to generate the (62) points of correspondence for me and my friend King. Using the correspondence, I then plot the triangulation (using delaunay) on the original image:
<div style="display: flex; width: 100%;">
    <img src="../images/project3_images/data/jason.jpg" alt="Jason" style="width: 50%; margin: 10px;">
    <img src="../images/project3_images/data/king.jpg" alt="King" style="width: 50%; margin: 10px;">
</div>
to create:
<div style="display: flex; width: 100%;">
    <img src="../images/project3_images/result/part1_jason_tri.jpg" alt="Jason" style="width: 50%; margin: 10px;">
    <img src="../images/project3_images/result/part1_king_tri.jpg" alt="King" style="width: 50%; margin: 10px;">
</div>

## Part 2. Computing the "Mid-way Face"
This part involves multiple steps. To create the mid-way face image, I first
1) computed the average shape (i.e. average of each corresponding keypoints pair from images A and B).
2) Then, each triangle from image A and image B should be warped into the corresponding triangle in the average shape. This is done by computing an affine transformation matrix and use the inverse affine warp to bring the pixels from both images into the average shape.
3) Finally, the color also has to be averaged to create the mid-way face.
<div style="display: flex; justify-content: center; width: 100%;">
    <img src="../images/project3_images/result/part2_midway_face.jpg" alt="Mid-way face" style="width: 50%; margin: 10px;">
</div>

## Part 3. The Morph Sequence
With the original images and the mid-way face image at hand, we can conduct the morphing process by:
1) first warp im1 and im2 into an intermediate shape configuration controlled by warp_frac as per the suggestion, and then cross-dissolved according to dissolve_frac.
2) For interpolation, both parameters lie in the range [0,1]. They are the only parameters that will vary from frame to frame in the animation. For the starting frame, they will both equal 0, and for the ending frame, they will both equal 1.

For the output, I created a 60 frames gif as follow:
<div style="display: flex; justify-content: center; width: 100%;">
    <img src="../images/project3_images/result/part3_morph_sequence.gif" alt="morph" style="width: 50%; margin: 10px;">
</div>

## Part 4. The "Mean face" of a population
For this part, I used the FEI neutral expression dataset, which consists of 200 images (100 male and 100 female). The process involves:
1) Compute the average face shape, which is done by averaging all keypoints across the dataset.
2) Morph each face in the dataset into the average shape and display some examples.

1a:
<div style="display: flex; width: 100%;">
    <img src="../images/project3_images/data/frontalimages_spatiallynormalized/1a.jpg" alt="1a" style="width: 33%; margin: 10px;">
    <img src="../images/project3_images/result/part4_1a_triangulation.jpg" alt="1a tri" style="width: 33%; margin: 10px;">
    <img src="../images/project3_images/result/part4_1a_to_average.jpg" alt="1a average" style="width: 33%; margin: 10px;">
</div>
2a:
<div style="display: flex; width: 100%;">
    <img src="../images/project3_images/data/frontalimages_spatiallynormalized/2a.jpg" alt="2a" style="width: 33%; margin: 10px;">
    <img src="../images/project3_images/result/part4_2a_triangulation.jpg" alt="2a tri" style="width: 33%; margin: 10px;">
    <img src="../images/project3_images/result/part4_2a_to_average.jpg" alt="2a average" style="width: 33%; margin: 10px;">
</div>
3a:
<div style="display: flex; width: 100%;">
    <img src="../images/project3_images/data/frontalimages_spatiallynormalized/3a.jpg" alt="3a" style="width: 33%; margin: 10px;">
    <img src="../images/project3_images/result/part4_3a_triangulation.jpg" alt="3a tri" style="width: 33%; margin: 10px;">
    <img src="../images/project3_images/result/part4_3a_to_average.jpg" alt="3a average" style="width: 33%; margin: 10px;">
</div>
3) Compute the average face of the dataset by warping all faces to the average shape and averaging the pixel values.
<div style="display: flex; justify-content: center; width: 100%;">
    <figure style="width: 40%; text-align: center; margin: 0 auto;">
        <img src="../images/project3_images/result/part4_average_face.jpg" alt="average face" style="width: 100%;">
        <figcaption>Average Face of 200 neutral expressions</figcaption>
    </figure>
</div>
4) Warp my face into the average geometry and the average face into your face's geometry.
<div style="display: flex; width: 100%;">
    <figure style="width: 33%; margin: 10px; text-align: center;">
        <img src="../images/project3_images/data/jason4.jpg" alt="jason part4" style="width: 100%;">
        <figcaption>Jason (original)</figcaption>
    </figure>
    <figure style="width: 33%; margin: 10px; text-align: center;">
        <img src="../images/project3_images/result/part4_jason4_to_average.jpg" alt="jason to average" style="width: 100%;">
        <figcaption>Jason to average</figcaption>
    </figure>
    <figure style="width: 33%; margin: 10px; text-align: center;">
        <img src="../images/project3_images/result/part4_average_to_jason4.jpg" alt="average to jason" style="width: 100%;">
        <figcaption>Average to Jason</figcaption>
    </figure>
</div>
The Jason-to-average image looks a bit odd, mainly due to the number of points available for warping (the dataset has 46 points by default, 50 including the corners I added manually for alignment).

## Part 5. Caricatures: Extrapolating from the mean
Finally, I computed the caricature for my face by adding the difference of my face and the average face onto my face, resulting in an image that emphasises my features.
<div style="display: flex; justify-content: center; width: 100%;">
    <figure style="width: 40%; text-align: center; margin: 0;">
        <img src="../images/project3_images/result/part5_jason4_caricature_0.75.jpg" alt="caricature face" style="width: 100%; margin: 10px;">
        <figcaption>alpha = 0.75</figcaption>
    </figure>
</div>

## Bells and Whistles
For the extra credit, I changed the gender of my face by morphing with the average Chinese female face (thanks to Chloe Zhong for providing the source).

Here are the original images:
<div style="display: flex; width: 100%; text-align: center;">
    <figure style="width: 50%; margin: 10px;">
        <img src="../images/project3_images/data/jason_no_glasses.jpg" alt="Jason no glasses">
        <figcaption>Jason (no glasses)</figcaption>
    </figure>
    <figure style="width: 50%; margin: 10px;">
        <img src="../images/project3_images/data/chinese_average_woman.jpg" alt="Chinese average woman">
        <figcaption>Chinese average woman</figcaption>
    </figure>
</div>
Here are the results:
<div style="display: flex; width: 100%; text-align: center;">
    <figure style="width: 33%; margin: 10px;">
        <img src="../images/project3_images/result/b&w_jason_to_woman_shape.jpg" alt="only shape">
        <figcaption>only shape</figcaption>
    </figure>
    <figure style="width: 33%; margin: 10px;">
        <img src="../images/project3_images/result/b&w_woman_to_jason_appearance.jpg" alt="only appearance">
        <figcaption>only appearance</figcaption>
    </figure>
    <figure style="width: 33%; margin: 10px;">
        <img src="../images/project3_images/result/b&w_jason_to_woman_both.jpg" alt="both">
        <figcaption>both</figcaption>
    </figure>
</div>


