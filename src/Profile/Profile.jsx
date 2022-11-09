import { Button, Card, PageHeader,Alert, TextStyles,DoughnutCharts,Grid,Datepicker,FormElement,TextField,Radio,Select, FlexLayout,MainLayout,LRLayout,FlexChild,Progressbar, Wysiwyg} from '@cedcommerce/ounce-ui';

import React from 'react';


const Profile = () => {
  return (
    <>
    
    
       <Card cardType='Plain'>
        <PageHeader
          action={<Button
            thickness="thin"
            content='Refresh Profile'
            description="Sell and manage all your orders and inventory"
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
          description="Sell and manage all your orders and inventory"
          title="Profile"
        />
       </Card> 

        <Card cardType='Plain'>
        <Alert
          destroy
          onClose={function noRefCheck(){}}
          type="success"
        >
         <FlexLayout spacing='tight'>
          <FlexChild>
          <TextStyles fontweight='bold' textcolor='dark' type="Display">Attention! </TextStyles>
          </FlexChild>

          <FlexChild>
          <TextStyles 
            fontweight='normal'
            type="Paragraph" 
            paragraphTypes="MD-1.4"
            lineHeight="LH-2.4"
            textcolor="textcolor"
            >Attention! </TextStyles>  
            </FlexChild>
          </FlexLayout> 
      
        
        </Alert>
        </Card>
  
        <Card cardType='Plain'>
          <FlexLayout   desktopWidth='33'
              tabWidth='33'
              mobileWidth='100' 
              childWidth='fullWidth' 
              spacing='loose'>    
            
            <Card>
              <Datepicker
                format="DD/MM/YYYY"
                name="Select date"
                onChange={function noRefCheck(){}}
                picker="date"
                placeholder="Select Date"
                placement="bottomLeft"
                showHelp="Help text"
                showToday
                thickness="thick"
              />
            </Card>
      
              <Card
                title={'Orders'}
                action={<TextStyles textcolor="primary">View All</TextStyles>}
              >
              </Card>
         
              <Card
                title={'Lorem Ipsum'}
                action={<TextStyles textcolor="primary">View All</TextStyles>}
              >
                <FlexLayout spacing='mediumTight' direction="vertical" wrap="wrap">
                  <FlexLayout spacing='tight' direction="vertical" wrap="wrap">
                    <TextStyles>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TextStyles>
                    <Progressbar
                      message="Hello"
                      percentage={50}
                      progessThickness="thin"
                    />
                  </FlexLayout>
                  <TextStyles type="Display">50% Complete</TextStyles>
                </FlexLayout>
              </Card>
            </FlexLayout>
        </Card>

         <Card cardType='Plain'>
             <FlexLayout   
              childWidth='fullWidth' 
              spacing='loose'>    
              <FlexChild  desktopWidth='66'
                tabWidth='66'
                mobileWidth='100'>
              <Card
                 cardType='Plain'
                >
               <Grid
                    columns={[
                      {
                        align: 'center',
                        dataIndex: 'name',
                        key: 'name',
                        title: 'Name',
                        width: 100
                      },
                      {
                        align: 'center',
                        dataIndex: 'age',
                        key: 'age',
                        title: 'Age',
                        width: 100
                      },
                      {
                        align: 'center',
                        dataIndex: 'address',
                        key: 'address',
                        title: 'Address',
                        width: 100
                      }
                    ]}
                    dataSource={[
                      {
                        address: '10 Downing Street',
                        age: 32,
                        key: '1',
                        name: 'Mike'
                      }, 
                      {
                        address: '10 Downing Street',
                        age: 42,
                        key: '8',
                        name: 'John'
                      },
                      {
                        address: '10 Downing Street',
                        age: 32,
                        key: '9',
                        name: 'Mike'
                      },
                      {
                        address: '10 Downing Street',
                        age: 42,
                        key: '10',
                        name: 'John'
                      },
                      {
                        address: '10 Downing Street',
                        age: 32,
                        key: '11',
                        name: 'Mike'
                      },
                      {
                        address: '10 Downing Street',
                        age: 42,
                        key: '12',
                        name: 'John'
                      },
                      {
                        address: '10 Downing Street',
                        age: 32,
                        key: '13',
                        name: 'Mike'
                      },
                      {
                        address: '10 Downing Street',
                        age: 42,
                        key: '',
                        name: 'John'
                      }
                    ]}
/>
                </Card>
              </FlexChild>
             
              <FlexChild  desktopWidth='33'
                tabWidth='33'
                mobileWidth='100'>
             <Card>
              <DoughnutCharts
                data={{
                  datasets: [
                    {
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1,
                      data: [
                        12,
                        19,
                        3,
                        5,
                        2,
                        3
                      ]
                    }
                  ],
                  labels: [
                    'Red',
                    'Blue',
                    'Yellow',
                    'Green',
                    'Purple',
                    'Orange'
                  ]
                }}
              />
            </Card>
              </FlexChild>

            </FlexLayout>
     
         </Card>

         <Card cardType='Plain'>
         <MainLayout>
  <Card title="Primary Layout Card 70%">
    <TextStyles>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis numquam adipisci aliquam, neque ratione placeat eligendi, error a molestiae voluptate nihil sequi dolore voluptatibus saepe dicta labore exercitationem quibusdam totam.
    </TextStyles>
  </Card>
  <Card title="Secondary Layout Card 30%">
    <TextStyles>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis numquam adipisci aliquam, neque ratione placeat eligendi, error a molestiae voluptate nihil sequi dolore voluptatibus saepe dicta labore exercitationem quibusdam totam.
    </TextStyles>
  </Card>
</MainLayout>


         </Card>


<Card cardType='Plain'>
<LRLayout
  lrHelpText="Left Right help text"
  title="Label"
>
  <FormElement>
    <TextField
      name="Label1"
      onChange={function noRefCheck(){}}
      value=""
    />
    <TextField
      name="Label2"
      onChange={function noRefCheck(){}}
      value=""
    />
    <Select
      name="Label 3"
      onChange={function noRefCheck(){}}
      options={[
        {
          label: 'label_1',
          value: 'value_1'
        },
        {
          label: 'label_2',
          value: 'value_2'
        },
        {
          label: 'label_3',
          value: 'value_3'
        }
      ]}
      value=""
    />
    <FlexLayout
      direction="vertical"
      spacing="mediumTight"
    >
      <TextStyles>
        Choice List
      </TextStyles>
      <Radio
        id="one"
        labelVal="Label 1"
        name="one"
        onClick={function noRefCheck(){}}
      />
      <Radio
        id="two"
        labelVal="Label 2"
        name="one"
        onClick={function noRefCheck(){}}
      />
      <Radio
        id="=three"
        labelVal="Label 3"
        name="one"
        onClick={function noRefCheck(){}}
      />
    </FlexLayout>
  </FormElement>
</LRLayout>
</Card>
        
     <Card cardType='Plain'>
      <Wysiwyg>
       </Wysiwyg>
     </Card>

        
 



    
     
      

    </>
  )
}
export default Profile;