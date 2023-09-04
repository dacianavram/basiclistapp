import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

interface Item {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({item}) => {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{uri: item.image}} />
      <Card.Content>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});

export default ItemCard;
