import * as React from 'react';
// External imports
import { Helmet } from 'react-helmet-async';

// MUI imports (sorted alphabetically)
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

// Internal imports (sorted alphabetically)
import { CONFIG } from 'src/config-global';

import { OrderListView } from 'src/sections/order/view';

export const defaultFont = 'Public Sans';

const metadata = { title: `Page one | Dashboard - ${CONFIG.site.name}` };

const DemoCard = styled(Card)(({ theme }) => ({
  marginLeft: '15px',
  width: 363,
  height: 100,
  textAlign: 'left',
  boxShadow: theme.shadows[1.2],
  borderRadius: '15px',
  position: 'relative', // Ensure the card is positioned relative for absolute positioning of icon
  alignItems: 'center',
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: '700',
  fontFamily: 'barlow',
}));

const SubheaderTypography = styled(Typography)(({ theme }) => ({
  fontSize: '13px',
  fontWeight: '600',
  color: '#637381',
  fontFamily: 'Public Sans',
}));

const IconWrapper = styled(Box)(({ theme, gradient }) => ({
  position: 'absolute',
  right: '16px', // Adjust as needed
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // Pseudo-element for the gradient background
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '400%', // Adjust the size as needed
    height: '400%',
    borderRadius: '22%', // To make it a circle
    transform: 'rotate(-40deg)',
    transformOrigin: '0 0',
    background: gradient,
    zIndex: -1, // Position it behind the icon
    marginTop: '100px',
  },
}));


export default function Page() {

  return (
    <div style={{ backgroundColor: '#F1F7FB', minHeight: '100vh', height: 'auto ' }}>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      
      <h1
        style={{ fontSize: '24px', marginLeft: '172px', marginTop: 50,fontFamily: 'public Sans' ,}}
      >
        Dashboard
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '35px',
          marginTop: '-70px',
          marginLeft: '138px'
        }}
      >
        <p style={{ fontSize: '14px', color: '#637381', fontFamily: 'public Sans' }}>
          Connecting Brands and Customers through WhatsApp Engagement and Marketing.
          <a href="#" style={{ color: '#078DEE', textDecoration: 'underline' }}>
            Learn more
          </a>
        </p>
        <Button
          variant="contained"
          disableElevation
          startIcon={
            <svg
              width="15"
              height="15"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0C4.02823 0 0 4.02823 0 9C0 13.9718 4.02823 18 9 18C13.9718 18 18 13.9718 18 9C18 4.02823 13.9718 0 9 0ZM14.2258 10.0161C14.2258 10.2556 14.0298 10.4516 13.7903 10.4516H10.4516V13.7903C10.4516 14.0298 10.2556 14.2258 10.0161 14.2258H7.98387C7.74435 14.2258 7.54839 14.0298 7.54839 13.7903V10.4516H4.20968C3.97016 10.4516 3.77419 10.2556 3.77419 10.0161V7.98387C3.77419 7.74435 3.97016 7.54839 4.20968 7.54839H7.54839V4.20968C7.54839 3.97016 7.74435 3.77419 7.98387 3.77419H10.0161C10.2556 3.77419 10.4516 3.97016 10.4516 4.20968V7.54839H13.7903C14.0298 7.54839 14.2258 7.74435 14.2258 7.98387V10.0161Z"
                fill="white"
              />
            </svg>
          }
          sx={{
            pl: '15px',
            pr: '15px',
            pt: '10px',
            pb: '10px',
            backgroundColor: '#078DEE',
            color: 'white',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow here
            '&:hover': {
              backgroundColor: '#0056b3',
              boxShadow: '0px 6px 8px #078dee7a', // Add a stronger shadow on hover
            },
            marginBottom: '30px',
            marginRight: '141px',
            fontSize: '12px',
            fontWeight: '600',
            fontFamily: 'Public Sans',
          }}
        >
          Add WhatsApp Number
        </Button>
      </div>
      <div className="container2" style={{ marginLeft: '102px', marginRight: '120px',position:'relative' ,}}>
        <Stack direction="row" spacing={0} sx={{ position: 'absolute', top: '50%', left: '50%', marginTop:'39px', transform: 'translate(-50%, -50%)' }}>
          <DemoCard>
            <CardHeader
              sx={{ mb: 2, p: 2 }}
              title={<TitleTypography>2</TitleTypography>}
              subheader={<SubheaderTypography>WhatsApp Number Added</SubheaderTypography>}
            />
            <CardContent>
              <IconWrapper gradient="linear-gradient(184deg, #a9f1c478 0%, rgba(34, 197, 94, 0) 100%)">
                {/* Replace with your SVG icon */}
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.7125 4.70668C25.0271 2.01599 21.4609 0.365876 17.6572 0.0539835C13.8535 -0.257909 10.0626 0.78895 6.96837 3.00573C3.87414 5.22252 1.68025 8.46329 0.782421 12.1435C-0.115408 15.8237 0.341931 19.7011 2.07194 23.0762L0.37372 31.2556C0.356099 31.337 0.3556 31.4212 0.372254 31.5028C0.388908 31.5844 0.422357 31.6617 0.470509 31.7299C0.541049 31.8334 0.641739 31.9131 0.759134 31.9583C0.876529 32.0036 1.00504 32.0122 1.12751 31.9831L9.208 30.083C12.6005 31.7558 16.4813 32.1804 20.1597 31.2811C23.8381 30.3817 27.0756 28.2169 29.2962 25.1717C31.5167 22.1266 32.5763 18.3986 32.2863 14.6512C31.9963 10.9037 30.3756 7.37989 27.7125 4.70668ZM25.193 24.6562C23.335 26.4943 20.9424 27.7077 18.3525 28.1253C15.7625 28.5429 13.1058 28.1438 10.7566 26.984L9.63036 26.4312L4.67647 27.5951L4.69114 27.534L5.7177 22.5874L5.16629 21.5078C3.96598 19.1691 3.54255 16.5136 3.95667 13.9215C4.37079 11.3295 5.6012 8.93398 7.47165 7.07816C9.8219 4.74725 13.0091 3.43782 16.3323 3.43782C19.6556 3.43782 22.8428 4.74725 25.193 7.07816C25.213 7.10093 25.2346 7.12232 25.2575 7.14217C27.5787 9.47909 28.8744 12.6316 28.8623 15.9124C28.8502 19.1932 27.5313 22.3362 25.193 24.6562Z"
                    fill="#28A645"
                  />
                  <path
                    d="M24.753 21.0278C24.1458 21.9764 23.1867 23.1374 21.9812 23.4255C19.8695 23.9318 16.6285 23.443 12.5955 19.7126L12.5457 19.669C8.99965 16.4071 8.07868 13.6923 8.30159 11.539C8.42478 10.3169 9.45134 9.21118 10.3166 8.48955C10.4534 8.37372 10.6156 8.29126 10.7902 8.24875C10.9649 8.20624 11.1472 8.20487 11.3225 8.24474C11.4978 8.28461 11.6612 8.36462 11.7998 8.47837C11.9383 8.59212 12.0481 8.73645 12.1204 8.89983L13.4256 11.8096C13.5104 11.9983 13.5418 12.2063 13.5165 12.4114C13.4912 12.6164 13.4101 12.8108 13.2819 12.9735L12.6219 13.8232C12.4803 13.9986 12.3949 14.2121 12.3766 14.4361C12.3583 14.6601 12.408 14.8845 12.5193 15.0802C12.8888 15.7233 13.7746 16.669 14.7572 17.5448C15.86 18.5342 17.0831 19.4391 17.8574 19.7475C18.0646 19.8315 18.2924 19.852 18.5114 19.8064C18.7305 19.7607 18.9307 19.651 19.0863 19.4915L19.8519 18.7262C19.9996 18.5817 20.1833 18.4786 20.3842 18.4275C20.5852 18.3764 20.7962 18.3791 20.9957 18.4352L24.096 19.3082C24.267 19.3602 24.4237 19.4504 24.5542 19.5717C24.6847 19.6931 24.7855 19.8424 24.8489 20.0084C24.9123 20.1743 24.9366 20.3525 24.92 20.5291C24.9034 20.7058 24.8462 20.8764 24.753 21.0278Z"
                    fill="#28A645"
                  />
                </svg>
              </IconWrapper>
            </CardContent>
          </DemoCard>
          <DemoCard>
            <CardHeader
              sx={{ mb: 2, p: 2 }}
              title={<TitleTypography>10,000</TitleTypography>}
              subheader={
                <SubheaderTypography>WhatsApp Message Quota (Outgoing)</SubheaderTypography>
              }
            />
            <CardContent>
              <IconWrapper gradient="linear-gradient(184deg, #ffe4ad73 0%, #fff4dd 100% )">
                {/* Replace with your SVG icon */}
                <img
                  src="public/assets/icons/svg-img/download 1 2.png"
                  alt="rightclick"
                  style={{ maxWidth: '32px', height: '32px' }}
                />
              </IconWrapper>
            </CardContent>
          </DemoCard>
          <DemoCard>
            <CardHeader
              sx={{ mb: 2, p: 2 }}
              title={<TitleTypography>2,000</TitleTypography>}
              subheader={<SubheaderTypography>Message Quota Used</SubheaderTypography>}
            />
            <CardContent>
              <IconWrapper gradient="linear-gradient(184deg, #d5b3ff9e 0%, #e2caff00 100%)">
                {/* Replace with your SVG icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.7989 16.2187H15.7812V3.20099C15.7812 3.041 15.6503 2.91009 15.4903 2.91009H14.5449C12.6347 2.90696 10.7429 3.28156 8.97805 4.01232C7.21324 4.74308 5.61034 5.81558 4.26157 7.16812C2.93329 8.49231 1.87493 10.0619 1.14532 11.7898C0.386078 13.5819 -0.00351082 15.5088 -9.98649e-05 17.455C-0.0032277 19.3651 0.371364 21.257 1.10212 23.0218C1.83288 24.7866 2.90539 26.3895 4.25794 27.7383C5.59244 29.0728 7.14875 30.1237 8.8796 30.8546C10.6717 31.6138 12.5986 32.0034 14.5449 32C16.455 32.0031 18.3469 31.6285 20.1117 30.8978C21.8765 30.167 23.4794 29.0945 24.8281 27.7419C26.1626 26.4074 27.2135 24.8511 27.9444 23.1203C28.7036 21.3282 29.0932 19.4013 29.0898 17.455V16.5096C29.0898 16.3496 28.9589 16.2187 28.7989 16.2187ZM23.0427 26.0293C21.9168 27.1465 20.5814 28.0305 19.1132 28.6307C17.645 29.231 16.0728 29.5357 14.4867 29.5273C11.2831 29.5128 8.27234 28.2583 6.00697 25.9929C3.72704 23.713 2.47254 20.6804 2.47254 17.455C2.47254 14.2297 3.72704 11.1971 6.00697 8.91715C7.99235 6.93177 10.5486 5.7209 13.3085 5.44455V18.6914H26.5554C26.2754 21.4658 25.0536 24.0366 23.0427 26.0293ZM31.9988 14.197L31.9043 13.1715C31.5952 9.82258 30.108 6.66269 27.7153 4.27732C25.321 1.88757 22.1676 0.408601 18.7993 0.0956465L17.7702 0.00110442C17.5993 -0.0134405 17.4538 0.117464 17.4538 0.288367V14.2551C17.4538 14.4151 17.5848 14.546 17.7447 14.546L31.7079 14.5097C31.8788 14.5097 32.0133 14.3642 31.9988 14.197ZM19.9192 12.0807V2.7501C22.2098 3.22953 24.3119 4.36392 25.9699 6.01544C27.6317 7.67356 28.7698 9.78258 29.2425 12.0552L19.9192 12.0807Z"
                    fill="#7D6ADB"
                  />
                </svg>
              </IconWrapper>
            </CardContent>
          </DemoCard>
        </Stack>
      </div>
      <div className="container3" style={{ position: 'relative', height: '56vh', }}>
  <Card
    sx={{
      mb: 3,
      p: 3,
      width: '1120px',
      position: 'absolute',
      left: '50%',
      top: '62%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    {/* Content */}
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Content Section */}
      <div style={{ flex: 1, marginRight: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Points To Remember
        </Typography>
        <ul
          style={{
            fontSize: '12px',
            color: '#637381',
            listStyleType: 'disc',
            paddingLeft: '20px',
          }}
        >
          {/* Your List Items */}
          <li> Choose a WhatsApp Business API provider that suits your needs and requirements </li> 
          <li> Familiarize yourself with the requirements for using the WhatsApp Business API. </li> 
          <li>Apply for access to the WhatsApp Business API through your chosen provider.</li>
          <li> Review and agree to the terms and conditions set by WhatsApp and your chosen provider. </li> 
          <li>Verify your business and phone number with WhatsApp.</li> 
          <li>Work with your chosen provider to complete the setup process.</li> 
          <li> Iterate on your messaging strategies to improve engagement and achieve your business goals. </li> 
          <li> Stay informed about updates and changes to policies that may affect your use of the API. 
          <a href="#" style={{ color: '#078DEE', textDecoration: 'underline' }}> Learn more </a> </li>
        </ul>
        <Button
          variant="outlined"
          disableElevation
          sx={{
            backgroundColor: 'white',
            color: '#007BFF',
            borderColor: '#b4dcfa',
            '&:hover': { borderColor: '#007BFF' },
            marginBottom: '12px',
            marginTop: '20px',
          }}
        >
          Add WhatsApp Number
        </Button>
      </div>

      {/* Image Section */}
      <div style={{ flexShrink: 0 }}>
        <a href="https://www.youtube.com/watch?v=CoIfgN0tfhE" target="_blank" rel="noopener noreferrer">
          <img
            src="public/assets/icons/svg-img/pointstoremember (1).png"
            alt="pabbly"
            style={{ maxWidth: '432px', height: 'auto' }}
          />
        </a>
      </div>
    </div>
  </Card>
</div>


      <OrderListView />
    </div>
  );
}
