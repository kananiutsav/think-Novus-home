export interface TButton {
  type?: 'button' | 'submit' | 'reset' | undefined
  label: string
  className?: string
  transparent?: boolean

}

export type CompanyPartner = {
  id: number
  title: string
  innertitle: string
  subtitle: string
  companypartnerimg: any
  btn1: string
  btn2: string
}
export type FrameImage = {
  id: number
  frameimg: any
}

export type TechExpertise = {

  id: number
  heading: { img: any, title: string }
  subHeading: { img: any, title: string }[]
  link: { img: any, label: string }
  img: any
}

// export type FilteringData = {
//   id: number
//   title: string
// }

export type CardDatas = {
  id: number
  mobile?: { id: number, img: any, title: string }[];
  bakend?: { id: number, img: any, title: string }[];
  frontend?: { id: number, img: any, title: string }[]
  cms?: { id: number, img: any, title: string }[]
  database?: { id: number, img: any, title: string }[]
  infa?: { id: number, img: any, title: string }[]
}

export type ServeData = {
  id: number
  mainHeading: { img: any, title: string }
  subHeading: { img: any, title: string }[]
  img: any
}

export type PButton = {
  label: string
  detail: string

}

export type ProcessUsed = {
  id: number
  num: string
  detail: string
}

export type recentlyData = {
  id: number
  title: string
  img: any
  description: string
  fulldata: any
}


export type clientSays = {
  id: number
  title: string
  img: any
  description: string
  clientName: string
  profession: string
  video: any

}

export type experienced = {
  id: number
  img: any
  record: string
  detail: string
}


export type Featured = {
  id: number
  img: any
  title: string
  subtitle: string
  detail: string
}

export type Methodologies = {
  id: number
  img: any
  title: string
  detail: string
}
export type Awards = {
  id: number
  img: any
}

export type Blog = {
  id: number
  img: any
  description: string
  btn: any
}

export type CompanyAddresses = {
  id: number
  img: any
  title: string
  subtitle: string
  inntitle: string
}

export type Footers = {
  id: number
  heading: string
  subHeading: { img: any, title: string }[]
}

export type lastFooters = {
  id: number
  img: any
}

export type Filters = {
  id: number
  heading: string
  subtitle: { id: number, img: any, title: string }[]
}

export type BusinessWorks ={
  id: number
  heading: string
  subHeading: string
  detail: { id: number , img: any, title: string, subtitle: string}[]
}

export type BusinessDetails = {
  id: number
  img: any
  title: string
  description: string
}


export type BusinessServices = {
  id: number
  title: string
}

export type PartnershipModels = {
  id: number
  heading: string
  innHeading: string
  detail: {id: number, title: string, subtitle: string, inntitle: string}[]
}
export type Benefits={
  id: number
  title: string
}
export type Developers={
  id: number
  heading: string
  detail: {img: any, title: string, subtitle: string}[]
}