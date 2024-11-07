var progressBar = new ProgressBar();

// update progress bar
if (pointcloudLoading) {
  var progress = pointcloud.progress;

  progressBar.progress = progress;

  var message;
  if (progress === 0 || pointcloud instanceof Potree.PointCloudArena4D) {
    message = "loading";
  } else {
    message = "loading: " + parseInt(progress * 100) + "%";
  }
  progressBar.message = message;

  if (progress === 1) {
    progressBar.hide();
  } else if (progress < 1) {
    progressBar.show();
  }
}
