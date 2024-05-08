import { Brush, Crop, Image, Magnet, Wand } from "lucide-react";

export const navLinks = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/transform",
    label: "Transform",
  },
  {
    route: "#pricing",
    label: "Pricing",
  },
  {
    route: "#contact",
    label: "Contact Us",
  },
];

export const services = [
  {
    title: "Auto-Enhance",
    description:
      "Our AI-powered auto-enhance feature intelligently adjusts your photos, making them look their best with just a single click.",
    icon: <Magnet className="h-8 w-8 text-gray-500 dark:text-gray-400" />,
  },
  {
    title: "Advanced Editing",
    description:
      "Unlock the full potential of your images with our suite of advanced editing tools, including layers, masking, and precise color adjustments.",
    icon: <Brush className="h-8 w-8 text-gray-500 dark:text-gray-400" />,
  },
  {
    title: "Precise Cropping",
    description:
      "Easily crop and resize your images to the perfect dimensions with our intuitive cropping tools, ensuring your visuals are always pixel-perfect.",
    icon: <Crop className="h-8 w-8 text-gray-500 dark:text-gray-400" />,
  },
  {
    title: "AI-Powered Effects",
    description:
      "Elevate your images with our AI-powered effects, from stunning filters to creative overlays, all designed to help you achieve your desired aesthetic.",
    icon: <Wand className="h-8 w-8 text-gray-500 dark:text-gray-400" />,
  },
];

export const plans = [
  {
    _id: 1,
    name: "Free",
    icon: <Image color="white" size={40} />,
    price: 0,
    inclusions: [
      {
        label: "Basic Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: <Image color="white" size={40} />,
    price: 40,
    inclusions: [
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: <Image color="white" size={40} />,
    price: 199,
    inclusions: [
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};
