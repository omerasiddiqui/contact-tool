let contacts = $('.contacts'), counter = 1, counterLocations = 1;

const response = [
  [
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": "2086156651",
      "officePhoneNumber": "8772971967",
      "emailAddress": "Raymond.Beagley@CenturyLink.com",
      "contactType": "AC",
      "contactName": "RAYMOND BEAGLEY"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "PNCO",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "BILL",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "LCON",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "MAIN",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "SHIP",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "TCON",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "VOIP",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": "6127608789",
      "officePhoneNumber": "6512315600",
      "emailAddress": "Eric.Harre@CenturyLink.com",
      "contactType": "ORDR",
      "contactName": "ERIC HARRE"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": "6023171030",
      "officePhoneNumber": "8663728783",
      "emailAddress": "Shenieka.R.Willis@centurylink.com",
      "contactType": "RI",
      "contactName": "SHENIEKA WILLIS"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": "5034210400",
      "officePhoneNumber": "8336371556",
      "emailAddress": "Karen.Kerkow@centurylink.com",
      "contactType": "SLSE",
      "contactName": "KAREN KERKOW"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "9999999999",
      "emailAddress": "bert.payton@centurylink.com",
      "contactType": "SLSR-AE",
      "contactName": "BERT PAYTON"
    }
  }
],
[
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "LA",
      "city": "MONROE",
      "postalCode": "80216",
      "addressLine1": "300 LAYTON AVE",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": "2086156651",
      "officePhoneNumber": "8772971967",
      "emailAddress": "Raymond.Beagley@CenturyLink.com",
      "contactType": "AC",
      "contactName": "RAYMOND BEAGLEY"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "PNCO",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "BILL",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "LCON",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "MAIN",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "SHIP",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "TCON",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "VOIP",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": "6127608789",
      "officePhoneNumber": "6512315600",
      "emailAddress": "Eric.Harre@CenturyLink.com",
      "contactType": "ORDR",
      "contactName": "ERIC HARRE"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": "6023171030",
      "officePhoneNumber": "8663728783",
      "emailAddress": "Shenieka.R.Willis@centurylink.com",
      "contactType": "RI",
      "contactName": "SHENIEKA WILLIS"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": "5034210400",
      "officePhoneNumber": "8336371556",
      "emailAddress": "Karen.Kerkow@centurylink.com",
      "contactType": "SLSE",
      "contactName": "KAREN KERKOW"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "9999999999",
      "emailAddress": "bert.payton@centurylink.com",
      "contactType": "SLSR-AE",
      "contactName": "BERT PAYTON"
    }
  }
],
[
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "223 W BROADWAY ST",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": "2086156651",
      "officePhoneNumber": "8772971967",
      "emailAddress": "Raymond.Beagley@CenturyLink.com",
      "contactType": "AC",
      "contactName": "RAYMOND BEAGLEY"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "PNCO",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "BILL",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "LCON",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "MAIN",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "SHIP",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "TCON",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "5413801282",
      "emailAddress": "executivedirector@flagstoneseniorliving.com",
      "contactType": "VOIP",
      "contactName": "SHARLA MOSQUEDA"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": "6127608789",
      "officePhoneNumber": "6512315600",
      "emailAddress": "Eric.Harre@CenturyLink.com",
      "contactType": "ORDR",
      "contactName": "ERIC HARRE"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": "6023171030",
      "officePhoneNumber": "8663728783",
      "emailAddress": "Shenieka.R.Willis@centurylink.com",
      "contactType": "RI",
      "contactName": "SHENIEKA WILLIS"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": "5034210400",
      "officePhoneNumber": "8336371556",
      "emailAddress": "Karen.Kerkow@centurylink.com",
      "contactType": "SLSE",
      "contactName": "KAREN KERKOW"
    }
  },
  {
    "addressInfo": {
      "idddcountryCode": "USA",
      "stateProvinceCode": "CO",
      "city": "DENVER",
      "postalCode": "80216",
      "addressLine1": "5885 E STAPLETON DR N",
      "addressLine2": "UNIT C305"
    },
    "contactInfo": {
      "methodOfAvailability": "24x7",
      "cellPhoneNumber": null,
      "officePhoneNumber": "9999999999",
      "emailAddress": "bert.payton@centurylink.com",
      "contactType": "SLSR-AE",
      "contactName": "BERT PAYTON"
    }
  }
]
];

const response2 = [
  [
    {
      "contactInfo": {
        "contactType": "BILL",
        "contactName": "CHRISTINA SMITH",
        "emailAddress": "csmith@telpluscommunications.com",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null,
        "officePhoneNumber": "6784864846"
      },
      "addressInfo": {
        "postalCode": "80237",
        "addressLine2": "SUIT 150",
        "city": "DENVER",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "stateProvinceCode": "CO",
        "idddcountryCode": "USA"
      }
    },
    {
      "contactInfo": {
        "contactType": "PNCO",
        "contactName": "MIKE MCCAULEY",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null,
        "officePhoneNumber": "6784864834"
      },
      "addressInfo": {
        "postalCode": "80237",
        "addressLine2": "SUIT 150",
        "city": "DENVER",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "stateProvinceCode": "CO",
        "idddcountryCode": "USA"
      }
    },
    {
      "contactInfo": {
        "contactType": "LCON",
        "contactName": "MIKE MCCAULEY",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null,
        "officePhoneNumber": "6784864834"
      },
      "addressInfo": {
        "postalCode": "80237",
        "addressLine2": "SUIT 150",
        "city": "DENVER",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "stateProvinceCode": "CO",
        "idddcountryCode": "USA"
      }
    },
    {
      "contactInfo": {
        "contactType": "MAIN",
        "contactName": "MIKE MCCAULEY",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null,
        "officePhoneNumber": "6784864834"
      },
      "addressInfo": {
        "postalCode": "80237",
        "addressLine2": "SUIT 150",
        "city": "DENVER",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "stateProvinceCode": "CO",
        "idddcountryCode": "USA"
      }
    },
    {
      "contactInfo": {
        "contactType": "NOTI",
        "contactName": "MIKE MCCAULEY",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null,
        "officePhoneNumber": "6784864834"
      },
      "addressInfo": {
        "postalCode": "80237",
        "addressLine2": "SUIT 150",
        "city": "DENVER",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "stateProvinceCode": "CO",
        "idddcountryCode": "USA"
      }
    },
    {
      "contactInfo": {
        "contactType": "SCHD",
        "contactName": "MIKE MCCAULEY",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null,
        "officePhoneNumber": "6784864834"
      },
      "addressInfo": {
        "postalCode": "80237",
        "addressLine2": "SUIT 150",
        "city": "DENVER",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "stateProvinceCode": "CO",
        "idddcountryCode": "USA"
      }
    },
    {
      "contactInfo": {
        "contactType": "SHIP",
        "contactName": "MIKE MCCAULEY",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null,
        "officePhoneNumber": "6784864834"
      },
      "addressInfo": {
        "postalCode": "80237",
        "addressLine2": "SUIT 150",
        "city": "DENVER",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "stateProvinceCode": "CO",
        "idddcountryCode": "USA"
      }
    },
    {
      "contactInfo": {
        "contactType": "SLSR-AE",
        "contactName": "MIKE MCCAULEY",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null,
        "officePhoneNumber": "6784864834"
      },
      "addressInfo": {
        "postalCode": "80237",
        "addressLine2": "SUIT 150",
        "city": "DENVER",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "stateProvinceCode": "CO",
        "idddcountryCode": "USA"
      }
    },
    {
      "contactInfo": {
        "contactType": "TCON",
        "contactName": "MIKE MCCAULEY",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null,
        "officePhoneNumber": "6784864834"
      },
      "addressInfo": {
        "postalCode": "80237",
        "addressLine2": "SUIT 150",
        "city": "DENVER",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "stateProvinceCode": "CO",
        "idddcountryCode": "USA"
      }
    },
    {
      "contactInfo": {
        "contactType": "TECH",
        "contactName": "MIKE MCCAULEY",
        "emailAddress": "mmccauley@telpluscommunications.com",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null,
        "officePhoneNumber": "6784864834"
      },
      "addressInfo": {
        "postalCode": "80237",
        "addressLine2": "SUIT 150",
        "city": "DENVER",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "stateProvinceCode": "CO",
        "idddcountryCode": "USA"
      }
    },
    {
      "contactInfo": {
        "contactType": "ORDR",
        "contactName": "MELISSA ROBERTS",
        "emailAddress": "melissa.roberts@centurylink.com",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null,
        "officePhoneNumber": "4078896659"
      },
      "addressInfo": {
        "postalCode": "80237",
        "addressLine2": "SUIT 150",
        "city": "DENVER",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "stateProvinceCode": "CO",
        "idddcountryCode": "USA"
      }
    },
    {
      "contactInfo": {
        "contactType": "SLSE",
        "contactName": "MELISSA ROBERTS",
        "emailAddress": "melissa.roberts@centurylink.com",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": null,
        "officePhoneNumber": "4078896659"
      },
      "addressInfo": {
        "postalCode": "80237",
        "addressLine2": "SUIT 150",
        "city": "DENVER",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "stateProvinceCode": "CO",
        "idddcountryCode": "USA"
      }
    },
    {
      "contactInfo": {
        "contactType": "RI",
        "contactName": "DENNIS WILLIAMS",
        "emailAddress": "Dennis.Williams@centurylink.com",
        "methodOfAvailability": "24x7",
        "cellPhoneNumber": "3185476692",
        "officePhoneNumber": "9999999999"
      },
      "addressInfo": {
        "postalCode": "80237",
        "addressLine2": "SUIT 150",
        "city": "DENVER",
        "addressLine1": "7001 E BELLEVIEW AVE",
        "stateProvinceCode": "CO",
        "idddcountryCode": "USA"
      }
    }
  ]
];

function ajaxTest() {
  
  response.forEach(function(item) {
  console.log(item)

  contacts.append(`<div class="location${counterLocations}"></div>`)
  $(`.location${counterLocations}`).append(`
  <div class="locationHeaderDiv"> 
    <button class="location-header"><h2>${item[0].addressInfo.addressLine1} ${item[0].addressInfo.city}, ${item[0].addressInfo.stateProvinceCode}</h2> <img id="chevron" src="assets/images/up-chevron.png" alt="up-chevron" /></button> 
    
  </div>`)

 for(var i = 0; i < item.length; i++) {

  $(`.location${counterLocations}`).append( `   
            <div class="beefup people" id="person${counter}">
                <h2 class="beefup__head">
                    <ul class="header-ul">
                    <li>Contact Type</li>
                        <li class="header-type"></li>
                        <li>Name</li>
                        <li class="header-name"></li>
                        <li>Email</li>
                        <li class="header-email"></li>
                    </ul>
                </h2>
                <div class="beefup__body inputs-group">
                <div class="body-left">
                    <div class="body-item">
                        <label for="name" class="label">Name</label>
                        <input type="text" class="inputs input-names" name="name">
                    </div>
                    <div class="body-item">
                        <label for="email" class="label">Email</label>
                        <input type="text" class="inputs inputs-emails" name="email">
                    </div>
                    <div class="body-item">
                        <label for="cellNum" class="label">Cell</label>
                        <input type="text" class="inputs inputs-cellNum" name="cellNum">
                    </div>
                </div>
                <div class="body-right">
                    <div class="body-item">
                        <label for="contactType" class="label">Contact Type</label>
                        <input type="text" class="inputs inputs-contactType" name="contactType">
                    </div>
                    <div class="body-item">
                        <label for="availability" class="label">Availability</label>
                        <input type="text" class="inputs inputs-availability" name="availability">
                    </div>
                    <div class="body-item">
                        <label for="officeNum" class="label">Office</label>
                        <input type="text" class="inputs inputs-officeNum" name="officeNum">
                    </div>
                </div>
                <div class="submitDiv">
                    <button class="update" id="update${counter}">Update</button>
                    <button class="delete" id="delete${counter}">Delete</button>
                </div>
            </div>
            </div>
            </div>`
            );
        $(`#person${counter} .header-name`).text(`${item[i].contactInfo.contactName}`)
        $(`#person${counter} .header-email`).text(`${item[i].contactInfo.emailAddress}`)
        $(`#person${counter} .header-type`).text(`${item[i].contactInfo.contactType}`)

        $(`#person${counter} input[name="name"]`).attr("value", `${item[i].contactInfo.contactName}`)
        $(`#person${counter} input[name="email"]`).attr("value", `${item[i].contactInfo.emailAddress}`)
        $(`#person${counter} input[name="cellNum"]`).attr("value", `${item[i].contactInfo.cellPhoneNumber}`)
        $(`#person${counter} input[name="officeNum"]`).attr("value", `${item[i].contactInfo.officePhoneNumber}`)
        $(`#person${counter} input[name="contactType"]`).attr("value", `${item[i].contactInfo.contactType}`)
        $(`#person${counter} input[name="availability"]`).attr("value", `${item[i].contactInfo.methodOfAvailability}`)

        counter++





 };
 counterLocations++;
});
}


// $(".searchBtn").on("click", ajaxTest();
ajaxTest();


$(document).ready(function() {

  // active tabs
  $(".tab-item").on("click", function(e) {

    for(var i = 0; i < $('.tab-item').length; i++) {
      $('.tab-item')[i].children[0].classList.remove('active');
    }

    $(this)[0].children[0].classList.add('active');
  })

  // accordion for locations
  $('.locationHeaderDiv').on('click', function(e) {
    var locationDiv = e.currentTarget.parentElement.children;

    // rotate arrow up and down on expand or collapse
    $(this)[0].children[0].children[1].classList.toggle('rotate');


    // hide location contacts on click
    $.each(locationDiv, function(index, value) {
      if(index !== 0) {
        ($(this)).toggleClass('hide');
        
      }

    })

  })

  $('.eng').on('click', function() {
    $('.contacts').addClass('hide');
  })

  
  $('.ubi').on('click', function() {
    $('.contacts').removeClass('hide');
  })




})