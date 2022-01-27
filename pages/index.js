import appConfig from '../config.json'
import { Box, Button, Text, TextField, Image } from '@skynexui/components';


function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Poppins', sans-serif;      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */ 
    `}</style>
  );
}


function Titulo (props) {
  const Tag = props.tag || 'h1' || 'name';
    return (
      <>
        <Tag>{props.children}</Tag>
              <style jsx>{`
              ${Tag} {
                      color: ${appConfig.theme.colors.textColor["branco"]};
                      font-size: 24px;
                      font-weight: 600;
                      font-family: 'Poppins', sans-serif;
                  }
              `}
              </style>
      </>        
    );
}
//Componente React
//function HomePage() {
    //JSX
  //  return (
 //       <div style={{backgroundColor: 'turquoise'}}>
 //           <GlobalStyle/>
  //          <Titulo tag="h2">Boas vindas de volta! </Titulo>
  //          <h2>Discord - Alura Matrix</h2>
  //  </div>
        
 //   )
//  }

// export default HomePage

export default function PaginaInicial() {
  const username = 'Silvio Henrique';
  
  return (
    <>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.backgroundColor["000"],
          backgroundImage: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c83c004e-1370-4756-88e5-4071de797088/dcyf17z-168bfc17-8e0f-40e7-a6f7-47785760bdce.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M4M2MwMDRlLTEzNzAtNDc1Ni04OGU1LTQwNzFkZTc5NzA4OFwvZGN5ZjE3ei0xNjhiZmMxNy04ZTBmLTQwZTctYTZmNy00Nzc4NTc2MGJkY2UuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RDOlMJIarz3nUFmfz9lJlIe8VyquyFq7jOzdDbPEjyc)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            //Bordas
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
            backgroundColor: 'rgba(24,31,37,0.4)',
          
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Bem vindo ao meu site!🐉</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: '#FFFFFF'}}>
              {appConfig.name}
            </Text>

            <TextField
             placeholder="Informe seu usuário do Git Hub"
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.textColor['branco'],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.bordas["bdpink"],
                  backgroundColor: 'rgba(24,31,37,0.9)',
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.backgroundColor["botao"],
                mainColorLight: appConfig.theme.colors.primary[200],
                mainColorStrong: appConfig.theme.colors.bordas["bdpink"],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '35px',
              backgroundColor: 'rgba(24,31,37,0.5)',
              //Bordas
              border: '1px ridge',
              //Cima:
            borderTopColor: appConfig.theme.colors.bordas["bdturquesa"],
            //Baixo:
            borderBottomColor: appConfig.theme.colors.bordas["bdbranca"],
            //Direta:
            borderRightColor: appConfig.theme.colors.bordas["bdciano"],
            //Esquerda:
            borderLeftColor: appConfig.theme.colors.bordas["bdpink"],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
              boxShadow: '0 2px 10px 0 rgb(24,31,37,0.9 / 90%)'

            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://i.pinimg.com/564x/5e/55/86/5e55863c7cc33035a186644e7f4d0d09.jpg`}
             
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.textColor["branco"],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}