import { Alert, Button, Card, FlexChild, FlexLayout, Notification, PageHeader, Progressbar, TextStyles } from '@cedcommerce/ounce-ui';
import React from 'react';



const Dashboard = () => {
  return (
    <>
      <Card cardType='Plain'>
        <PageHeader
          action={<Button
            thickness="thin"
            content='Refresh Dashboard'
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#ffffff">
                <path d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z" />
              </svg>
            }
            iconRound={false}
            onClick={function noRefCheck() { }}
          />}
          title="Dashboard"
        />
      </Card>
      <Card
        cardType='Plain'
        extraClass='mt-20'
      >
        <Alert
          destroy
          onClose={function noRefCheck() { }}
          type="warning"
        >
          <TextStyles fontweight='bold' textcolor='dark' type="Display">Attention! </TextStyles> Your last login time was - 2022-06-22 14:29:57
        </Alert>
      </Card>
    <Card cardType='Plain'>
    <FlexLayout childWidth='fullWidth' spacing='loose'>
            
            <FlexChild>

        <FlexLayout     
            desktopWidth='33'
            tabWidth='33'
            mobileWidth='100' 
            childWidth='fullWidth' 
            spacing='loose'>
          <FlexChild>
            <Card
              title={'Products'}
              action={<TextStyles textcolor="primary">View All</TextStyles>}
            >
            </Card>
          </FlexChild>
          <FlexChild
          >
            <Card
              title={'Orders'}
              action={<TextStyles textcolor="primary">View All</TextStyles>}
            >
            </Card>
          </FlexChild>
          <FlexChild
          >
            <Card
              title={'Ongoing Activities'}
              action={<TextStyles textcolor="primary">View All</TextStyles>}
            >
              <FlexLayout spacing='mediumTight' direction="vertical" wrap="wrap">
                <FlexLayout spacing='tight' direction="vertical" wrap="wrap">
                  <TextStyles>Sit back and relax! Product(s) validation for Arise criteria initiated</TextStyles>
                  <Progressbar
                    message="Hello"
                    percentage={10}
                    progessThickness="thin"
                  />
                </FlexLayout>
                <TextStyles type="Display">88% Complete</TextStyles>
              </FlexLayout>
            </Card>
          </FlexChild>

          </FlexLayout>
          </FlexChild>

          <FlexChild>

        <FlexLayout spacing='loose' childWidth='fullWidth'>

          <FlexChild
            desktopWidth='66'
            tabWidth='66'
            mobileWidth='100'
          >
           <FlexLayout childWidth='fullWidth'>
           <Card
              title={'Sales Chart'}
              action={<TextStyles textcolor="primary">View All</TextStyles>}
            >
                  <TextStyles
                    alignment="left"
                    fontweight="normal"
                    textcolor="dark"
                    type="simpleText"
                    utility="none"
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </TextStyles>

            </Card>
           </FlexLayout>
          </FlexChild>
          <FlexChild
            desktopWidth='33'
            tabWidth='33'
            mobileWidth='100'
          >
        <FlexLayout childWidth='fullWidth'>
        <Card
              title={'Completed Activities'}
              action={<TextStyles textcolor="primary">View All</TextStyles>}
            >
              <FlexLayout spacing='loose' direction="vertical" wrap="wrap">
                <Notification
                  type="info"
                  subdesciption="Yesterday (18/10/2021)"
                  destroy={false}
                >
                  Notification Without Destroy
                </Notification>
                <Notification
                  type="success"
                  subdesciption="Yesterday (20/10/2022"
                  destroy={false}
                >
                  Notification Without Destroy
                </Notification>
                <Notification
                  type="warning"
                  subdesciption="Yesterday (18/10/2022)"
                  destroy={false}
                >
                  Notification Without Destroy
                </Notification>
                <Notification
                  type="info"
                  subdesciption="Yesterday (18/10/2021)"
                  destroy={false}
                >
                  Notification Without Destroy
                </Notification>
                <Notification
                  type="danger"
                  subdesciption="Yesterday (18/10/2021)"
                  destroy={false}
                >
                  Notification Without Destroy
                </Notification>
              </FlexLayout>
            </Card>
        </FlexLayout>
          </FlexChild>
        </FlexLayout>

        </FlexChild>
        </FlexLayout>
    </Card>
      
   
    </>
  )
}
export default Dashboard;