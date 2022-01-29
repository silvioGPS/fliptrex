import { Box, Text, TextField, Image, Button } from '@skynexui/components'
import React from 'react'
import appConfig from '../config.json'

const Header = () =>{
  return (
    <>
      <Box
        styleSheet={{
          width: '100%',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text variant='heading5'>Chat</Text>
        <Button
          variant='tertiary'
          colorVariant='neutral'
          label='Logout'
          href='/'
        />
      </Box>
    </>
  )
}

const MessageList = (props) => {
  return (
    <Box
      tag='ul'
      styleSheet={{
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '16px',
      }}
    >
      {
        props.allmessages.map((message) => {
          return (
            <Text
              tag='li'
              key={message.id}
              styleSheet={{
                borderRadius: '15px',
                padding: '6px',
                marginBottom: '15px',
                hover: {
                transition: '2s',
                border: '1px ridge',
              //borderColor: '-webkit-box-shadow: 0px 20px 20px #86CEEB',

              //Cima:
              borderTopColor: appConfig.theme.colors.bordas["bdturquesa"],
              //Baixo:
              borderBottomColor: appConfig.theme.colors.bordas["bdciano"],
              //Direta:
              borderRightColor: appConfig.theme.colors.bordas["bdbranca"],
              //Esquerda:
              borderLeftColor: appConfig.theme.colors.bordas["bdpink"],
              padding: '20px',
              
                },
              }}
            >
              <Box
            as='form'
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
                <Image
                  styleSheet={{
                    width: '50px',
                    height: '50px',
                    borderColor: 'linear-gradient to(#009FFF,#ec2F4B)',
                    borderRadius: '50%',
                    display: 'inline-block',
                    marginRight: '8px',
                  }}
                  src={`https://cdn-icons-png.flaticon.com/512/1939/1939452.png`}
                />
                <Text tag='strong'>{message.from}</Text>
                <Text
                  styleSheet={{
                    fontSize: '10px',
                    marginLeft: '8px',
                    color: appConfig.theme.colors.neutrals[300],
                  }}
                  tag='span'
                >
                  {new Date().toLocaleDateString()}
                </Text>
              </Box>
              {message.text}
            </Text>
          )
        })
      }
    </Box>
  )
}


export default function ChatPage() {
  const [message, setMessage] = React.useState('')
  const handleMessage = (event) => {
    setMessage(event.target.value)
  }

  const handleNewMessages = (novaMensagem) => {
    const message = {
      id: chat.length + 1,
      from: 'SilvioGPS',
      text: novaMensagem,
    }
    setChat([...chat, message])
    setMessage('')
  }
  const handleSubmit = (event) => {
    if(event.key === 'Enter') {
      event.preventDefault()
      handleNewMessages(message)
    }
  }

  const [chat, setChat] = React.useState([])

  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c83c004e-1370-4756-88e5-4071de797088/dcyf17z-168bfc17-8e0f-40e7-a6f7-47785760bdce.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M4M2MwMDRlLTEzNzAtNDc1Ni04OGU1LTQwNzFkZTc5NzA4OFwvZGN5ZjE3ei0xNjhiZmMxNy04ZTBmLTQwZTctYTZmNy00Nzc4NTc2MGJkY2UuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RDOlMJIarz3nUFmfz9lJlIe8VyquyFq7jOzdDbPEjyc)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000'],
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          border: '1px ridge',
              //borderColor: '-webkit-box-shadow: 0px 20px 20px #86CEEB',

              //Cima:
              borderTopColor: appConfig.theme.colors.bordas["bdturquesa"],
              //Baixo:
              borderBottomColor: appConfig.theme.colors.bordas["bdciano"],
              //Direta:
              borderRightColor: appConfig.theme.colors.bordas["bdbranca"],
              //Esquerda:
              borderLeftColor: appConfig.theme.colors.bordas["bdpink"],
              borderRadius: '5px', padding: '32px', margin: '16px',
              //Cabo aqui
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 90%)',
          borderRadius: '5px',
          backgroundColor: 'rgba(24,31,37,0.4)',
          height: '100%',
          maxWidth: '95%',
          maxHeight: '95vh',
          padding: '32px',
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: 'relative',
            display: 'flex',
            flex: 1,
            height: '80%',
            backgroundColor: 'rgba(24,31,37,0.4)',
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '16px',
          }}
        >
          <MessageList allmessages={chat}/>

          <Box
            as='form'
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextField 
              fullWidth
              placeholder='Insira sua mensagem aqui...'
              type='textarea'
              onChange={handleMessage}
              onKeyPress={handleSubmit}
              value={message}
            
             textField={{  
                  neutral: {
                    textColor: appConfig.theme.colors.textColor['branco'],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.bordas["bdpink"],
                    backgroundColor: 'rgba(24,31,37,0.9)',
                  },                     
            }}    
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}