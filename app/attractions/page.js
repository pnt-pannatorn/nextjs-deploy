'use client'
import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import React , { useEffect, useState } from 'react'

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/attractions`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function page() {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    return null;
  }
  const data = await getData();
  return (
    <div>
      <Typography variant="h5">Attractions123</Typography>
      <a href={`/attractions/create`}>
        <Button variant="contained" sx={{ my: 2 }}>
          Create
        </Button>
      </a>
      <Grid container spacing={1}>
        {data.map((attraction) => (
          <Grid item key={attraction.id} xs={12} md={4}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image={attraction.coverimage}
                title={attraction.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {attraction.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {attraction.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <a href={`/attractions/${attraction.id}`}>
                  <Button size="small">Learn More</Button>
                </a>
                <a href={`/attractions/update?id=${attraction.id}`}>
                  <Button size="sma l">Edit</Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
