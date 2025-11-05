"use client";
import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import HeroBg from "../../../public/bannerC.png";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "75vh", md: "90vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* ===== Background Image ===== */}
      <Box sx={{ position: "absolute", inset: 0 }}>
        <Image
          src={HeroBg}
          alt="Supplier Network Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(10,23,92,0.7) 50%, rgba(240,80,35,0.6) 100%)",
          }}
        />
      </Box>

      {/* ===== Content ===== */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Outfit, sans-serif",
            fontWeight: "700",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.2rem" },
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          {`Join India’s Most Trusted`}{" "}
          <Box component="span" sx={{ color: "#F05023" }}>
            Manufacturing Network
          </Box>
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: "Lato, sans-serif",
            color: "rgba(255,255,255,0.9)",
            mb: 3,
            fontSize: { xs: "0.9rem", sm: "1.1rem" },
            lineHeight: 1.5,
          }}
        >
          Manufacture with confidence. <br />
          SureSupply takes care of sales, logistics, and payments — so you can
          focus on production.
        </Typography>

        <Button
          component={Link}
          href="#apply-form"
          sx={{
            backgroundColor: "#F05023",
            color: "#fff",
            fontWeight: "600",
            textTransform: "none",
            fontFamily: "Outfit, sans-serif",
            fontSize: "1rem",
            px: 4,
            py: 1.2,
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            "&:hover": { backgroundColor: "#d6401d" },
          }}
        >
          Become a Supplier
        </Button>
      </Container>
    </Box>
  );
}
