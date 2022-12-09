import { useEffect, useState } from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Skeleton from "@mui/material/Skeleton";

function CardItem({ breed }) {
  const [imgUrl, setImgUrl] = useState(false);

  function getUrl() {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((res) => res.json())
      .then((data) => setImgUrl(data.message[0]))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getUrl();
  });

  return (
    <div className="card-item">
      <Card sx={{ minHeight: "280px", width: "100%" }}>
        <CardCover>
          {imgUrl === false ? (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
            />
          ) : (
            <img src={imgUrl} srcSet={imgUrl} loading="lazy" alt={breed} />
          )}
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography
            level="h2"
            fontSize="lg"
            textColor="#fff"
            mb={1}
            textTransform="capitalize"
            fontWeight="700"
          >
            {breed}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardItem;
