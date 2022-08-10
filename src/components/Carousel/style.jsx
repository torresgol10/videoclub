import styled from '@emotion/styled'

export const CarouselWrape = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
`

export const CarouselItem = styled.div`
  scroll-snap-align: center;
  position: relative;
  min-width: 400px;
  overflow: hidden;
  & img{
    width: 100%;
    object-fit: cover;
  }
`


