import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import findDogPlaceholder from "../Components/img/find-dog-img.png";

function FindDogCard({ name, img }) {
  return (
    <div className="card-item">
      <Card sx={{ minHeight: "280px", width: "auto" }}>
        <CardCover>
          {name === false ? (
            <img
              src={findDogPlaceholder}
              srcSet={findDogPlaceholder}
              loading="lazy"
              alt="..."
            />
          ) : (
            <img src={img} srcSet={img} loading="lazy" alt={name} />
          )}
        </CardCover>
        {name && (
          <CardCover
            sx={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
            }}
          />
        )}
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography
            level="h2"
            fontSize="lg"
            textColor="#fff"
            mb={1}
            textTransform="capitalize"
            fontWeight="700"
          >
            {name && name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default FindDogCard;
