<!-- JavaScript to handle navigation -->
<script>
  function navigateToTag() {
    const select = document.getElementById("tag-select");
    const selectedUrl = select.value;

    if (selectedUrl) {
      window.location.href = selectedUrl;
    } else {
      alert("Please select a keyword from the list.");
    }
  }
</script>