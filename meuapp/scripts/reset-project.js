import { useState } from 'react'
import {View,Text,StyleSheet}from 'react'
export default function ResetProject(){
  
  const[ligado,setLigado]=useState<Boolean>(false)
  return(
    
    <view stayle={styles.container}> 
      <Text style={styles.status}>
        {ligado ? 'Ligado' : 'Desligado'}
      
      </Text>
      <Pressable>
        onPress={() => setLigado((prev) => !prev)}
        style={ligado ? styles.botaoLigado : styles.botaoDesligado}

          <text style={styles.textoBotao}>
            {ligado ? 'Ligado' : 'Desligado'}
            status: {fon}

          </text>

      </Pressable>
  </view>
  
)
    
}
const styles = StyleSheet.create({

})