import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.util.*;

/**
 * Write a description of class Ground here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Ground extends World
{
    private final int FoodCount = 5;
    private final int EnemyCount = 5;
    private final int StarAreatHeight = 100;
    private final int Height = 600;
    private final int Width = 200;
    
    private int score = 0;
    /**
     * Constructor for objects of class Ground.
     * 
     */
    public Ground()
    {    
        // Create a new world with 600x400 cells with a cell size of 1x1 pixels.
        super(200, 600, 1); 
        setFood();
        setEnemies();
        setPlayer();
        setEnd();
        showScore();
    }
    
    public void endGame(boolean win){
        List<Actor> actors = getObjects(Actor.class);
        for(Actor actor : actors){
            removeObject(actor);
        }
        
        if(win){
            showText("You win!", 100, 50);
        }else{
            showText("You died!", 100, 50);
        }
    }
    
    public void updateScore(int value){
        score += value;
        showScore();
    }
    
    private void showScore(){
        showText("Score: " + score, 50, 20);
    }
    
    private void setPlayer(){
        addObject(new Player(), 100, 550);
    }
    
    private void setEnd(){
        addObject(new End(), 100, 35);
    }
    
    private void setFood(){
        for(int foodIndex = 0; foodIndex< FoodCount; foodIndex++){
            int randWidth = getRandomValue(20 , Width - 20);
            int randHeight = getRandomValue(StarAreatHeight , Height - StarAreatHeight);
            addObject(Food.getRandomFood(), randWidth, randHeight);
        }
    }
    
    private void setEnemies(){
        for(int enemyIndex = 0; enemyIndex < EnemyCount; enemyIndex++){
            int randWidth = getRandomValue(20 , Width - 20);
            int randHeight = getRandomValue(StarAreatHeight , Height - StarAreatHeight);
            int randSpeed = getRandomValue(1,3);
            addObject(new Spider(randSpeed), randWidth, randHeight);
        }
    }
    
    private int getRandomValue(int start, int end){
        Random rand = new Random();
        return rand.nextInt(end - start) + start;
    }
}
