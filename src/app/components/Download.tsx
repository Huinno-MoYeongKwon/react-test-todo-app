const Download = () => {
  return (
    <div>
      <button
        onClick={() => {
          const fileLinks = [
            "http://localhost:3000/test1.jpg",
            "http://localhost:3000/test2.jpg",
            "http://localhost:3000/test3.jpg",
          ];

          fileLinks.forEach((fileLink, index) => {
            const link = document.createElement("a");
            link.href = fileLink;
            link.download = index + ".jpg";
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();

            setTimeout(() => {
              URL.revokeObjectURL(fileLink);
              link.remove();
            }, 1000);
          });
        }}
      >
        다운로드
      </button>

      <a
        href="http://localhost:3000/test1.jpg"
        download
        target="_blank"
        rel="noreferrer"
      >
        test 이미지1
      </a>
      <br></br>

      <a
        href="http://localhost:3000/test2.jpg"
        download
        target="_blank"
        rel="noreferrer"
      >
        test 이미지2
      </a>

      <br></br>
      <a
        href="http://localhost:3000/test3.jpg"
        download
        target="_blank"
        rel="noreferrer"
      >
        test 이미지1
      </a>
    </div>
  );
};

export default Download;
