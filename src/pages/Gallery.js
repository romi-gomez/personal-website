import * as React from "react"
import { useEffect, useState} from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import FramesGallery from "../components/FramesGallery"

const GallerysContainer = styled.div`
  width:100%;
  height: 210%;
  overflow: hidden;
  display : flex;
  flex-direction: column;
  justify-content: center;
`

const work = [
  [
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"}
  ],
  [
    {name: "website", path: "../artwork/RotateGrid"},
    {name: "website", path: "../artwork/RotateGrid"},
    {name: "website", path: "../artwork/RotateGrid"},
    {name: "website", path: "../artwork/RotateGrid"},
    {name: "website", path: "../artwork/RotateGrid"},
    {name: "website", path: "../artwork/RotateGrid"},
    {name: "website", path: "../artwork/RotateGrid"},
  ],
  [
    {name: "animation", path: "../artwork/RotateGrid"},
    {name: "animation", path: "../artwork/RotateGrid"},
    {name: "animation", path: "../artwork/RotateGrid"},
    {name: "animation", path: "../artwork/RotateGrid"},
    {name: "animation", path: "../artwork/RotateGrid"},
    {name: "animation", path: "../artwork/RotateGrid"},
    {name: "animation", path: "../artwork/RotateGrid"},
  ]
]

const GalleryPage = () => {
  const displayFramesGallerys = (gallerys) => {
    return gallerys.map((gallery, index) => {
      return <FramesGallery key={index} frames={gallery}/>
    })
  }

  return (
    <Layout children = {
      <GallerysContainer>
        {displayFramesGallerys(work)}
      </GallerysContainer>
    }/>
  )
}

export default GalleryPage

export const Head = () => {
  return (
    <title>Gallery Page</title>
  )
}
